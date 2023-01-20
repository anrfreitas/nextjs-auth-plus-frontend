import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (session) {
        res.status(200).json({
            user: session.user,
            expires: session.expires,
        });
    } else {
        res.status(401);
    }
    res.end();
};

export default Handler;
