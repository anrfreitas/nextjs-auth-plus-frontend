import { NextComponentType, NextPageContext } from 'next';

declare global {
    /**
     * Auth type object
     */
    type AuthType = 'ADMIN' | 'USER' | 'ALL';

    type PageComponent = NextComponentType<NextPageContext, any, any> & {
        authType: AuthType;
    };
}
