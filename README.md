# Currículo / Portfólio — React Native + Expo

App de currículo e portfólio feito com React Native, Expo e Expo Router. Não usa banco de dados nem servidor: todo o conteúdo fica no arquivo `data/curriculo.json`, que vai junto no app.

## Telas

| Aba | Conteúdo |
| --- | --- |
| Início | Apresentação, habilidades, idiomas, contatos e acesso ao mural |
| Acadêmico | Linha do tempo da formação |
| Profissional | Linha do tempo das experiências, com atividades e tecnologias |
| Projetos | Portfólio com filtro por tecnologia e links |
| Mural de recados | Visitantes deixam mensagens (só de demonstração, veja abaixo) |

## Funcionalidades extras

- **Mural de recados**: os recados aparecem na hora, mas ficam só na memória do aparelho e somem quando o app é fechado. Os recados de exemplo estão em `src/lib/recados.ts`.
- **Tema claro/escuro** trocado pelo botão no topo de cada tela.
- **Compartilhar currículo** pelo menu de compartilhamento do celular.
- **Filtro de projetos** por tecnologia.
- **Navegação adaptada à web**: barra inferior no celular e menu lateral em telas largas.

## Editando o currículo

Edite `data/curriculo.json`. A ordem dos itens no arquivo é a ordem em que aparecem nas telas. Campos opcionais podem ficar vazios (`""`) ou ser removidos.

## Rodando

```bash
npm install
npm run web         # abre no navegador
npm run go          # abre no Expo Go
npm run goTunnel    # Expo Go via túnel (celular em outra rede)
```

## Publicando (EAS Update)

```bash
npm run publicar
```

O comando publica os arquivos como estão na pasta. Faça um commit antes para a atualização ficar com uma mensagem que faça sentido (o `--auto` usa a mensagem do último commit).
