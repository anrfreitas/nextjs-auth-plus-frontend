import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import LoadingScreen from '@components/LoadingScreen';
import useRedirect from '@hooks/useRedirect';
import useToaster from '@/hooks/useToaster';

type Props = {
    children: JSX.Element;
    authType?: AuthType;
};

const AuthGuard = ({ children, authType }: Props) => {
    const [invalidated, setInvalidated] = useState(false);
    const { status, data: user } = useSession<false>();
    const { messageBox } = useToaster();

    const redirect = useRedirect();

    useEffect(() => {
        if (user?.authType && authType === 'ADMIN' && user.authType === 'USER') {
            setInvalidated(true);
            messageBox('You are not authorized to access that page', 'error');
            redirect.redirectToDashboard();
        }

        if (status === 'authenticated' && Router.pathname.includes('login')) {
            setInvalidated(true);
            redirect.redirectToDashboard();
        }

        if (status !== 'authenticated' && status !== 'loading') {
            setInvalidated(true);
            redirect.redirectToLogin();
        }

        // SECURITY: We need it only in case any of the conditions above matches their criteria
        setTimeout(() => {
            if (status !== 'loading') setInvalidated(false);
        }, 250);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    if (status === 'loading') return <LoadingScreen />;

    if (!invalidated) {
        return <>{children}</>;
    } else {
        return <LoadingScreen />;
    }
};

export default AuthGuard;
