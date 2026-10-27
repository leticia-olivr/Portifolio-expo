// Os dados do currículo vêm de data/curriculo.json — edite esse arquivo para mudar o conteúdo do app.
// A ordem dos itens no JSON é a ordem em que aparecem nas telas.

import dados from '../../data/curriculo.json';

import type { Experiencia, Formacao, Perfil, Projeto } from '@/lib/types';

function comIds<T>(prefixo: string, itens: Omit<T, 'id'>[]) {
  return itens.map((item, i) => ({ ...item, id: `${prefixo}-${i}` }) as T);
}

export const perfil: Perfil = dados.perfil;
export const formacoes = comIds<Formacao>('formacao', dados.formacoes);
export const experiencias = comIds<Experiencia>('experiencia', dados.experiencias);
export const projetos = comIds<Projeto>('projeto', dados.projetos);
