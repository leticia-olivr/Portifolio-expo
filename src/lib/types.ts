export type Perfil = {
  nome: string;
  titulo: string;
  resumo: string;
  localizacao?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  habilidades?: string[];
  idiomas?: string[];
};

export type Formacao = {
  id: string;
  instituicao: string;
  curso: string;
  nivel?: string;
  inicio: string;
  fim?: string;
  descricao?: string;
};

export type Experiencia = {
  id: string;
  empresa: string;
  cargo: string;
  tipo?: string;
  inicio: string;
  fim?: string;
  descricao?: string;
  atividades?: string[];
  tecnologias?: string[];
};

export type Projeto = {
  id: string;
  nome: string;
  descricao: string;
  tecnologias?: string[];
  link?: string;
  repositorio?: string;
  destaque?: boolean;
};

export type Recado = {
  id: string;
  nome: string;
  mensagem: string;
  criadoEm: string;
};
