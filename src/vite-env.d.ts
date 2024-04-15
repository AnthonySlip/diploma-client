/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_HOST: string
  readonly VITE_PORT: number
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
