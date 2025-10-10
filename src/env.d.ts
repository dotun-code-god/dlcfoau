/// <reference path="../.env" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ORIGIN_TRIAL_TOKEN: string
}

interface ImportMeta {
    env: ImportMetaEnv
}
