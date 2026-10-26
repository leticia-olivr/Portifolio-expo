type ParseObject = {
  objectId: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Perfil = ParseObject & {
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

export type Formacao = ParseObject & {
  instituicao: string;
  curso: string;
  nivel?: string;
  inicio: string;
  fim?: string;
  descricao?: string;
  ordem?: number;
};

export type Experiencia = ParseObject & {
  empresa: string;
  cargo: string;
  tipo?: string;
  inicio: string;
  fim?: string;
  descricao?: string;
  atividades?: string[];
  tecnologias?: string[];
  ordem?: number;
};

export type Projeto = ParseObject & {
  nome: string;
  descricao: string;
  tecnologias?: string[];
  link?: string;
  repositorio?: string;
  destaque?: boolean;
  ordem?: number;
};

export type Recado = ParseObject & {
  nome: string;
  mensagem: string;
};
