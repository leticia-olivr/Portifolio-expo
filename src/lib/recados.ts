// O mural não tem servidor: os recados ficam só na memória e somem quando o app é fechado.

import type { Recado } from '@/lib/types';

// A lista é compartilhada entre as visitas à tela enquanto o app estiver aberto.
export const recados: Recado[] = [
  {
    id: 'exemplo-1',
    nome: 'Prof. Ricardo',
    mensagem: 'Parabéns pelo app! Ficou muito bem organizado.',
    criadoEm: '2026-10-24T14:32:00.000Z',
  },
  {
    id: 'exemplo-2',
    nome: 'Júlia',
    mensagem: 'Amei o tema escuro 🌙',
    criadoEm: '2026-10-22T20:05:00.000Z',
  },
  {
    id: 'exemplo-3',
    nome: 'Lucas Ferreira',
    mensagem: 'Passando pra deixar um oi! Se precisar de alguém pra testar os seus projetos, me chama.',
    criadoEm: '2026-10-20T09:15:00.000Z',
  },
];
