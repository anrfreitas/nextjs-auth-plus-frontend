import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Router from 'next/router';

const Login = () => {
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
        } else Router.push('/dashboard');
    };

    const onSSOButtonClick = async () => {
        await signIn('google');
    };

    const onEnterKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onLoginButtonClick();
    };

    return (
        <div className="flex flex-col bg-gray-light p-4 w-[250px]">
            <span>Email: </span>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <span className="mt-2">Password: </span>
            <input
                type="password"
                onKeyDown={(e) => onEnterKeyDown(e)}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-blue mt-3 p-2" onClick={onLoginButtonClick}>
                Login
            </button>
            <button className="btn btn-blue mt-3 p-2" onClick={onSSOButtonClick}>
                Login with Google
            </button>
        </div>
    );
};

export default Login;
