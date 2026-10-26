// Envia o conteúdo de data/curriculo.json para o Back4App.
// Uso: npm run seed            (apaga os dados antigos do currículo e envia de novo)
// Os recados (classe Recado) nunca são apagados.

import { readFile } from 'node:fs/promises';

const APP_ID = process.env.EXPO_PUBLIC_BACK4APP_APP_ID;
const REST_KEY = process.env.EXPO_PUBLIC_BACK4APP_REST_KEY;
const SERVER_URL = process.env.EXPO_PUBLIC_BACK4APP_SERVER_URL || 'https://parseapi.back4app.com';

if (!APP_ID || !REST_KEY) {
  console.error('Faltam as chaves do Back4App. Crie o arquivo .env.local (veja .env.example).');
  process.exit(1);
}

async function api(path, init = {}) {
  const res = await fetch(`${SERVER_URL}${path}`, {
    ...init,
    headers: {
      'X-Parse-Application-Id': APP_ID,
      'X-Parse-REST-API-Key': REST_KEY,
      'Content-Type': 'application/json',
    },
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) throw new Error(`${init.method ?? 'GET'} ${path}: ${body?.error ?? res.status}`);
  return body;
}

async function substituir(className, itens) {
  const { results } = await api(`/classes/${className}?limit=1000&keys=objectId`).catch(() => ({ results: [] }));
  for (const { objectId } of results) {
    await api(`/classes/${className}/${objectId}`, { method: 'DELETE' });
  }
  for (const item of itens) {
    await api(`/classes/${className}`, { method: 'POST', body: JSON.stringify(item) });
  }
  console.log(`✔ ${className}: ${itens.length} registro(s)`);
}

const dados = JSON.parse(await readFile(new URL('../data/curriculo.json', import.meta.url), 'utf8'));

await substituir('Perfil', [dados.perfil]);
await substituir('Formacao', dados.formacoes);
await substituir('Experiencia', dados.experiencias);
await substituir('Projeto', dados.projetos);

console.log('\nPronto! Abra o app e puxe a tela para baixo para atualizar.');
