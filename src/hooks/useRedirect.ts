import { useRouter } from 'next/router';

const useRedirect = () => {
    const router = useRouter();

    const redirectToLogin = async () => router.push('/login');
    const redirectToDashboard = async () => router.push('/dashboard');

    return {
        redirectToLogin,
        redirectToDashboard,
    };
};

export default useRedirect;
