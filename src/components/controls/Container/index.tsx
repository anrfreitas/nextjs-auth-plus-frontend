import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import SideMenu from '@/components/SideMenu';
import LoadingScreen from '@/components/LoadingScreen';

const Container = ({ children }) => {
    const { status } = useSession<false>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /*
            Auth Guard Rule
            - If the user is unauthenticated, we proceed showing the login screen
            - If not, we keep the loading page active because AuthGuard will redirect to /dashboard
        */
        if (status === 'authenticated') setLoading(false);
        else setLoading(true);
    }, [status]);

    return loading ? (
        <LoadingScreen />
    ) : (
        <SideMenu>
            <div className="flex flex-col bg-white p-4">{children}</div>
        </SideMenu>
    );
};

export default Container;
