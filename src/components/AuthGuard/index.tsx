import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Router from 'next/router';
import LoadingScreen from '../LoadingScreen';
import useRedirect from '@/hooks/useRedirect';

type Props = {
    children: JSX.Element;
    authType?: AuthType;
};

const AuthGuard = ({ children }: Props) => {
    const { status } = useSession<false>();
    const redirect = useRedirect();

    useEffect(() => {
        if (status === 'authenticated' && Router.pathname.includes('login')) {
            redirect.redirectToDashboard();
        }

        if (status !== 'authenticated' && status !== 'loading') {
            redirect.redirectToLogin();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    if (status === 'loading') return <LoadingScreen />;

    return <>{children}</>;
};

export default AuthGuard;
