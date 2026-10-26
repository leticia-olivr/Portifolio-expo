# Currículo / Portfólio — React Native + Expo

App de currículo e portfólio feito com React Native, Expo e Expo Router. Os dados (perfil, formação, experiências e projetos) vêm de um back-end no **Back4App**.

## Telas

| Aba | Conteúdo |
| --- | --- |
| Início | Apresentação, habilidades, idiomas, contatos e acesso ao mural |
| Acadêmico | Linha do tempo da formação |
| Profissional | Linha do tempo das experiências, com atividades e tecnologias |
| Projetos | Portfólio com filtro por tecnologia e links |
| Sobre | Tecnologias, módulos e funcionalidades extras do app |
| Mural de recados | Visitantes deixam mensagens, salvas no Back4App |

## Funcionalidades extras

- **Mural de recados**: grava e lê mensagens na classe `Recado` do Back4App.
- **Tema claro/escuro** trocado pelo botão no topo de cada tela.
- **Compartilhar currículo** pelo menu de compartilhamento do celular.
- **Filtro de projetos** por tecnologia e **puxar para atualizar** os dados do back-end.

## Configurando o Back4App

1. Crie um app em [back4app.com](https://www.back4app.com).
2. Em **App Settings > Security & Keys**, copie o *Application ID* e a *REST API Key*.
3. Copie `.env.example` para `.env.local` e cole as chaves.
4. Edite `data/curriculo.json` com os seus dados.
5. Envie os dados para o Back4App:

   ```bash
   npm run seed
   ```

   O comando cria as classes `Perfil`, `Formacao`, `Experiencia` e `Projeto`. Rodar de novo substitui os dados (os recados são mantidos).

## Rodando

```bash
npm install
npm run go          # abre no Expo Go
npm run goTunnel    # Expo Go via túnel (celular em outra rede)
```

## Publicando (EAS Update)

```bash
npm run publicar
```

O `.env.local` precisa existir na hora de publicar, porque as chaves entram no pacote do app.
