import axios from 'axios';
import { getCookie } from 'cookies-next';
import { NextApiRequest } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

import config from '@config';

const protectedUserRoute = async (req: NextApiRequest): Promise<Session> => {
    const session = await getSession({ req });
    if (!session) throw new Error('401 Unauthorized');
    if (session.authType !== 'USER') throw new Error('401 Unauthorized');
    return Promise.resolve(session);
};

const setupAxiosAuthentication = (req: NextApiRequest): typeof axiosInstance => {
    const cookie = getCookie('app.session-token', { req });
    if (!cookie) return undefined;

    const axiosInstance = axios.create({
        baseURL: config.BASE_URL,
    });
    axiosInstance.defaults.headers.common.Authorization = cookie;
    return axiosInstance;
};

export { protectedUserRoute, setupAxiosAuthentication };
