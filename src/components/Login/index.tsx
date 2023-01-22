import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeBrandsIcons from '@fortawesome/free-brands-svg-icons';
import TextInput from '@components/controls/TextInput';
import Button from '@components/controls/Button';
import useRedirect from '@hooks/useRedirect';
import LoadingScreen from '@components/LoadingScreen';

const Login = () => {
    const redirect = useRedirect();
    const { status } = useSession<false>();

    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginButtonClick = async () => {
        const result = await signIn<'credentials'>('users', {
            email,
            password,
            redirect: false,
        });

        if (result.error) {
            alert('Hey! Looks like you entered invalid credentials.');
        } else redirect.redirectToDashboard();
    };

    const onSSOButtonClick = async () => {
        console.log('clicked');
        await signIn('google');
    };

    const onEnterKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onLoginButtonClick();
    };

    const googleIcon = <FontAwesomeIcon className="mr-2" icon={freeBrandsIcons.faGoogle} />;

    useEffect(() => {
        /*
            Auth Guard Rule
            - If the user is unauthenticated, we proceed showing the login screen
            - If not, we keep the loading page active because AuthGuard will redirect to /dashboard
        */
        if (status === 'unauthenticated') setLoading(false);
    }, [loading, status]);

    return loading ? (
        <LoadingScreen />
    ) : (
        <div className="flex flex-col mt-3 ml-3 items-center">
            <div className="flex flex-col bg-special-blue p-4 w-[22rem] rounded-md">
                <span>Email: </span>
                <TextInput value={email} setValue={setEmail} />
                <span className="mt-2">Password: </span>
                <TextInput
                    isPassword
                    onKeyDown={(e) => onEnterKeyDown(e)}
                    value={password}
                    setValue={setPassword}
                />
                <Button text="Login" className="mt-3" onClick={onLoginButtonClick} />
                <Button
                    text="Login with Google"
                    className="mt-3"
                    icon={googleIcon}
                    onClick={onSSOButtonClick}
                />
            </div>
        </div>
    );
};

export default Login;
