import '@/styles/tailwind.css';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import AuthGuard from '@/components/AuthGuard';

type Props = AppProps & {
    Component: PageComponent;
};

export default function App({ Component, pageProps }: Props) {
    return (
        <SessionProvider>
            <AuthGuard authType={Component.authType}>
                <Component {...pageProps} />
            </AuthGuard>
        </SessionProvider>
    );
}
