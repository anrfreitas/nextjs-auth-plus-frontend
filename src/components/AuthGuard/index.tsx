import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Router from 'next/router';
import LoadingScreen from '../LoadingScreen';

type Props = {
    children: JSX.Element;
    authType?: AuthType;
};

const AuthGuard = ({ children }: Props) => {
    const { status } = useSession<false>();

    useEffect(() => {
        if (status !== 'authenticated' && status !== 'loading') {
            Router.push('/login');
        }

        if (status === 'authenticated' && Router.pathname.includes('login')) {
            Router.push('/dashboard');
        }
    }, [status]);

    if (status === 'loading') return <LoadingScreen />;

    return <>{children}</>;
};

export default AuthGuard;
