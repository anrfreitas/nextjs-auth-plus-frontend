import Router from 'next/router';
import { useEffect } from 'react';

const IndexPage: PageComponent = () => {
    useEffect(() => {
        Router.push('/login');
    }, []);
    return <></>;
};

export default IndexPage;

IndexPage.authType = 'ALL';
