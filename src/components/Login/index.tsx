import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Router from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginButtonClick = async () => {
        await signIn<'credentials'>('users', {
            email,
            password,
            redirect: false,
        })
            .then(() => Router.push('/dashboard'))
            .catch((e) => console.log('e', e));
    };

    return (
        <div className="flex flex-col bg-gray p-4 w-[250px]">
            <span>Email: </span>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <span className="mt-2">Password: </span>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-blue mt-3 p-2" onClick={onLoginButtonClick}>
                Login
            </button>
        </div>
    );
};

export default Login;
