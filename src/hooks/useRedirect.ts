import { useRouter } from 'next/router';

const useRedirect = () => {
    const router = useRouter();

    const redirectToLogin = async () => router.push('/login');
    const redirectToDashboard = async () => router.push('/dashboard');
    const redirectToManageUsers = async () => router.push('/users');
    const redirectToProfile = async () => router.push('/profile');

    return {
        redirectToLogin,
        redirectToDashboard,
        redirectToManageUsers,
        redirectToProfile,
    };
};

export default useRedirect;
