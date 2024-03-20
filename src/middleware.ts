import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ locals }, next) => {
  if (!locals.token) {
    const basic = btoa(
      `${import.meta.env.ICD_API_CLIENT_ID}:${
        import.meta.env.ICD_API_CLIENT_SECRET
      }`,
    );

    await fetch('https://icdaccessmanagement.who.int/connect/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        scope: 'icdapi_access',
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        locals.token = response.access_token;
      })
      .catch((err) => console.error(err));
  }
  return next();
};
