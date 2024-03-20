/// <reference types="astro/client" />
/// <reference types="simple-stack-form/types" />

interface ImportMetaEnv {
  readonly ICD_API_CLIENT_ID: string;
  readonly ICD_API_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    token: string;
    error: string;
  }
}
