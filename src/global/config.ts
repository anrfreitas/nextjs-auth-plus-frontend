export type ConfigType = {
    PRODUCTION_BUILD: boolean;
    BASE_URL: string;
    INTERNAL_BASE_URL: string;
};

const config: ConfigType = {
    PRODUCTION_BUILD: process.env.NODE_ENV === 'production',
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? 'https://localhost:4999',
    INTERNAL_BASE_URL: process.env.INTERNAL_BASE_URL ?? 'https://host.docker.internal:4999',
};

export default config;
