import { useRouter } from 'next/router';

const useRedirect = () => {
    const router = useRouter();

    const redirectToLogin = async () => router.push('/login');
    const redirectToDashboard = async () => router.push('/dashboard');
    const redirectToManageUsers = async () => router.push('/users');

    return {
        redirectToLogin,
        redirectToDashboard,
        redirectToManageUsers,
    };
};

export default useRedirect;
