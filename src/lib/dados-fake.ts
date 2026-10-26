// Dados fictícios usados no modo demonstração (quando o .env.local não existe).
// Servem para testar os layouts sem precisar do Back4App.

import type { Experiencia, Formacao, Perfil, Projeto, Recado } from '@/lib/types';

const perfil: Perfil = {
  objectId: 'fake-perfil',
  nome: 'Mariana Alves Costa',
  titulo: 'Estudante de Ciência da Computação · Dev Mobile',
  resumo:
    'Sou estudante do 6º período de Ciência da Computação e apaixonada por criar apps que resolvem problemas do dia a dia. ' +
    'Tenho experiência com React Native, Expo e integração com APIs REST. Busco uma vaga de estágio em desenvolvimento mobile ' +
    'onde eu possa aprender com um time experiente e entregar produtos usados por muita gente.',
  localizacao: 'Recife, PE',
  email: 'mariana.costa@exemplo.com',
  github: 'https://github.com/expo',
  linkedin: 'https://www.linkedin.com/',
  habilidades: [
    'React Native',
    'Expo',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Git e GitHub',
    'Figma',
    'SQL',
    'Firebase',
    'Testes com Jest',
  ],
  idiomas: ['Português (nativo)', 'Inglês (avançado)', 'Espanhol (básico)'],
};

const formacoes: Formacao[] = [
  {
    objectId: 'fake-form-1',
    ordem: 1,
    curso: 'Bacharelado em Ciência da Computação',
    instituicao: 'Universidade Federal de Pernambuco',
    nivel: 'Graduação',
    inicio: '2023',
    fim: '',
    descricao:
      'Ênfase em engenharia de software e computação móvel. Monitora de Algoritmos e Estruturas de Dados e participante do grupo de pesquisa em IHC.',
  },
  {
    objectId: 'fake-form-2',
    ordem: 2,
    curso: 'Desenvolvimento Mobile com React Native',
    instituicao: 'Rocketseat',
    nivel: 'Curso livre',
    inicio: '2024',
    fim: '2024',
    descricao: 'Navegação, consumo de APIs, armazenamento local e publicação nas lojas.',
  },
  {
    objectId: 'fake-form-3',
    ordem: 3,
    curso: 'Técnico em Informática para Internet',
    instituicao: 'IFPE — Campus Recife',
    nivel: 'Ensino técnico',
    inicio: '2019',
    fim: '2022',
    descricao: '',
  },
];

const experiencias: Experiencia[] = [
  {
    objectId: 'fake-exp-1',
    ordem: 1,
    cargo: 'Estagiária de Desenvolvimento Mobile',
    empresa: 'Porto Digital Labs',
    tipo: 'Estágio',
    inicio: 'Mar 2025',
    fim: '',
    descricao: 'Desenvolvimento do app de fidelidade de uma rede de farmácias, com mais de 50 mil usuários ativos.',
    atividades: [
      'Implementei o fluxo de cadastro e login com validação de CPF e autenticação por SMS.',
      'Reduzi em 40% o tempo de carregamento da tela inicial com cache de imagens e paginação.',
      'Escrevi testes automatizados para os componentes principais.',
    ],
    tecnologias: ['React Native', 'Expo', 'TypeScript', 'Jest'],
  },
  {
    objectId: 'fake-exp-2',
    ordem: 2,
    cargo: 'Desenvolvedora Front-end',
    empresa: 'Empresa Júnior CIn',
    tipo: 'Voluntário',
    inicio: 'Ago 2023',
    fim: 'Fev 2025',
    descricao: 'Criação de sites e sistemas para pequenos negócios da região.',
    atividades: [
      'Liderei o projeto do site de uma clínica veterinária, do protótipo à entrega.',
      'Conduzi reuniões de levantamento de requisitos com clientes.',
    ],
    tecnologias: ['React', 'JavaScript', 'Figma'],
  },
  {
    objectId: 'fake-exp-3',
    ordem: 3,
    cargo: 'Monitora de Algoritmos',
    empresa: 'Universidade Federal de Pernambuco',
    tipo: 'Monitoria',
    inicio: '2024',
    fim: '2024',
    descricao: '',
    atividades: [],
    tecnologias: ['Python', 'C'],
  },
];

const projetos: Projeto[] = [
  {
    objectId: 'fake-proj-1',
    ordem: 1,
    nome: 'App Currículo',
    descricao: 'Este aplicativo: currículo e portfólio em React Native + Expo, com dados vindos do Back4App.',
    tecnologias: ['React Native', 'Expo', 'Back4App'],
    link: 'https://expo.dev',
    repositorio: 'https://github.com/expo/expo',
    destaque: true,
  },
  {
    objectId: 'fake-proj-2',
    ordem: 2,
    nome: 'Rango Fácil',
    descricao:
      'App para estudantes dividirem as compras do mês e as receitas da semana na república. Tem lista de compras compartilhada, divisão de gastos e notificações.',
    tecnologias: ['React Native', 'Firebase', 'TypeScript'],
    link: '',
    repositorio: 'https://github.com/expo/examples',
    destaque: true,
  },
  {
    objectId: 'fake-proj-3',
    ordem: 3,
    nome: 'Painel de Monitoria',
    descricao: 'Sistema web para agendar horários de monitoria e acompanhar as dúvidas mais frequentes da turma.',
    tecnologias: ['React', 'Node.js', 'SQL'],
    link: 'https://react.dev',
    repositorio: '',
    destaque: false,
  },
  {
    objectId: 'fake-proj-4',
    ordem: 4,
    nome: 'Bot de Avisos do Centro Acadêmico',
    descricao: 'Bot que envia no grupo os avisos de provas e eventos do curso.',
    tecnologias: ['Node.js', 'JavaScript'],
    link: '',
    repositorio: '',
    destaque: false,
  },
  {
    objectId: 'fake-proj-5',
    ordem: 5,
    nome: 'Jogo da Memória Acessível',
    descricao: 'Jogo com suporte a leitor de tela e alto contraste, feito para a disciplina de IHC.',
    tecnologias: ['JavaScript', 'HTML e CSS'],
    link: 'https://developer.mozilla.org',
    repositorio: 'https://github.com/mdn',
    destaque: false,
  },
];

const recados: Recado[] = [
  {
    objectId: 'fake-rec-1',
    nome: 'Prof. Ricardo',
    mensagem: 'Parabéns pelo app, Mariana! Ficou muito bem organizado.',
    createdAt: '2026-10-24T14:32:00.000Z',
  },
  {
    objectId: 'fake-rec-2',
    nome: 'Júlia',
    mensagem: 'Amei o tema escuro 🌙',
    createdAt: '2026-10-22T20:05:00.000Z',
  },
  {
    objectId: 'fake-rec-3',
    nome: 'Lucas Ferreira',
    mensagem:
      'Passando pra deixar um oi! Vi o projeto Rango Fácil e achei a ideia ótima — se precisar de alguém pra testar, me chama.',
    createdAt: '2026-10-20T09:15:00.000Z',
  },
];

export const dadosFake: Record<string, object[]> = {
  Perfil: [perfil],
  Formacao: formacoes,
  Experiencia: experiencias,
  Projeto: projetos,
  Recado: recados,
};
