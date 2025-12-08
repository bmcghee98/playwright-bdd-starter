import { APIRequestContext, request } from '@playwright/test';

export async function createApi(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: 'http://localhost:3001',
  });
}
