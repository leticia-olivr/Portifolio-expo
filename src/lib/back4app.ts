// Cliente mínimo para a API REST do Back4App (Parse Server).
// As chaves vêm do arquivo .env.local (veja .env.example).

import { dadosFake } from '@/lib/dados-fake';

const APP_ID = process.env.EXPO_PUBLIC_BACK4APP_APP_ID;
const REST_KEY = process.env.EXPO_PUBLIC_BACK4APP_REST_KEY;
const SERVER_URL = process.env.EXPO_PUBLIC_BACK4APP_SERVER_URL || 'https://parseapi.back4app.com';

export const back4appConfigurado = Boolean(APP_ID && REST_KEY);

export class Back4AppError extends Error {}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!back4appConfigurado) {
    throw new Back4AppError(
      'Back4App não configurado. Crie o arquivo .env.local com as chaves do seu app (veja .env.example).'
    );
  }

  let response: Response;
  try {
    response = await fetch(`${SERVER_URL}${path}`, {
      ...init,
      headers: {
        'X-Parse-Application-Id': APP_ID!,
        'X-Parse-REST-API-Key': REST_KEY!,
        'Content-Type': 'application/json',
        ...init?.headers,
      },
    });
  } catch {
    throw new Back4AppError('Sem conexão com o servidor. Verifique sua internet e tente de novo.');
  }

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Back4AppError(body?.error ?? `Erro ${response.status} ao falar com o Back4App.`);
  }
  return body as T;
}

type ListarOpcoes = { order?: string; limit?: number };

export async function listar<T>(className: string, { order, limit = 100 }: ListarOpcoes = {}) {
  // Modo demonstração: sem chaves, usa os dados fictícios (já estão na ordem certa).
  if (!back4appConfigurado) return (dadosFake[className] ?? []).slice(0, limit) as T[];

  const params = new URLSearchParams({ limit: String(limit) });
  if (order) params.set('order', order);
  const { results } = await request<{ results: T[] }>(`/classes/${className}?${params}`);
  return results;
}

export async function criar<T extends object>(className: string, dados: T) {
  if (!back4appConfigurado) {
    // Modo demonstração: guarda só na memória (some ao recarregar o app).
    const novo = { ...dados, objectId: `fake-${Date.now()}`, createdAt: new Date().toISOString() };
    (dadosFake[className] ??= []).unshift(novo);
    return novo;
  }
  return request<{ objectId: string; createdAt: string }>(`/classes/${className}`, {
    method: 'POST',
    body: JSON.stringify(dados),
  });
}
