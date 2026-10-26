import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

import { listar } from '@/lib/back4app';
import type { Experiencia, Formacao, Perfil, Projeto } from '@/lib/types';

type Curriculo = {
  perfil: Perfil | null;
  formacoes: Formacao[];
  experiencias: Experiencia[];
  projetos: Projeto[];
};

type CurriculoContextValue = Curriculo & {
  status: 'carregando' | 'pronto' | 'erro';
  erro: string | null;
  atualizando: boolean;
  sincronizadoEm: Date | null;
  recarregar: () => Promise<void>;
};

const vazio: Curriculo = { perfil: null, formacoes: [], experiencias: [], projetos: [] };

const CurriculoContext = createContext<CurriculoContextValue | null>(null);

async function buscarCurriculo(): Promise<Curriculo> {
  const [perfis, formacoes, experiencias, projetos] = await Promise.all([
    listar<Perfil>('Perfil', { limit: 1 }),
    listar<Formacao>('Formacao', { order: 'ordem' }),
    listar<Experiencia>('Experiencia', { order: 'ordem' }),
    listar<Projeto>('Projeto', { order: 'ordem' }),
  ]);
  return { perfil: perfis[0] ?? null, formacoes, experiencias, projetos };
}

export function CurriculoProvider({ children }: { children: ReactNode }) {
  const [dados, setDados] = useState<Curriculo>(vazio);
  const [status, setStatus] = useState<CurriculoContextValue['status']>('carregando');
  const [erro, setErro] = useState<string | null>(null);
  const [atualizando, setAtualizando] = useState(false);
  const [sincronizadoEm, setSincronizadoEm] = useState<Date | null>(null);

  const carregar = useCallback(
    () =>
      buscarCurriculo().then(
        (novos) => {
          setDados(novos);
          setSincronizadoEm(new Date());
          setErro(null);
          setStatus('pronto');
        },
        (e) => {
          setErro(e instanceof Error ? e.message : 'Erro desconhecido.');
          // Mantém os dados já carregados se a atualização falhar.
          setStatus((atual) => (atual === 'pronto' ? 'pronto' : 'erro'));
        }
      ),
    []
  );

  const recarregar = useCallback(async () => {
    setAtualizando(true);
    await carregar();
    setAtualizando(false);
  }, [carregar]);

  useEffect(() => {
    carregar();
  }, [carregar]);

  return (
    <CurriculoContext.Provider
      value={{ ...dados, status, erro, atualizando, sincronizadoEm, recarregar }}>
      {children}
    </CurriculoContext.Provider>
  );
}

export function useCurriculo() {
  const ctx = useContext(CurriculoContext);
  if (!ctx) throw new Error('useCurriculo precisa estar dentro de <CurriculoProvider>');
  return ctx;
}
