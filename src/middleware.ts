import type { MiddlewareHandler } from 'astro';
import { ofetch } from 'ofetch';

export const onRequest: MiddlewareHandler = async ({ locals }, next) => {
  if (!locals.token) {
    const basic = btoa(
      `${import.meta.env.ICD_API_CLIENT_ID}:${
        import.meta.env.ICD_API_CLIENT_SECRET
      }`,
    );

    const { access_token } = await ofetch<{
      access_token: string;
      expires_in: number;
      token_type: string;
    }>('https://icdaccessmanagement.who.int/connect/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        scope: 'icdapi_access',
      }),
      ignoreResponseError: true,
      onResponseError({ response }) {
        locals.error = response._data;
      },
    });

    locals.token = access_token;
  }
  return next();
};
