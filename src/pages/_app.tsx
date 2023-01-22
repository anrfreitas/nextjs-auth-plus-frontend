import '@styles/tailwind.css';
import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

// Setup Toaster Notifications
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';

// Internal imports
import AuthGuard from '@components/AuthGuard';

type Props = AppProps & {
    Component: PageComponent;
};

export default function App({ Component, pageProps }: Props) {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Toaster position="top-center" reverseOrder={false} />
            <SessionProvider>
                <AuthGuard authType={Component.authType}>
                    <Component {...pageProps} />
                </AuthGuard>
            </SessionProvider>
        </ThemeProvider>
    );
}
