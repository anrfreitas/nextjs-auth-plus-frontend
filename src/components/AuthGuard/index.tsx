import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Router from 'next/router';

type Props = {
    children: JSX.Element;
    authType?: AuthType;
};

const AuthGuard = ({ children }: Props) => {
    const { status } = useSession<false>();

    useEffect(() => {
        setTimeout(() => {
            if (status !== 'authenticated') {
                Router.push('/login');
            }
            if (status === 'authenticated' && Router.pathname.includes('login')) {
                Router.push('/dashboard');
            }
        }, 500);
    }, []);

    return <>{children}</>;
};

export default AuthGuard;
