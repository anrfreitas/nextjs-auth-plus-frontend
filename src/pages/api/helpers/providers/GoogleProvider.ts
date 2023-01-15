import { OAuthConfig } from 'next-auth/providers';
import { GoogleProfile } from 'next-auth/providers/google';

const GoogleProvider: OAuthConfig<GoogleProfile> = {
    id: 'google',
    name: 'Google',
    type: 'oauth',
    clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    wellKnown: 'https://accounts.google.com/.well-known/openid-configuration',
    authorization: { params: { scope: 'openid email profile' } },
    idToken: true,
    profile(data) {
        return {
            id: data.sub,
            email: data.email?.toLowerCase(),
            userType: 'USER',
            name: `${data.given_name} ${data.family_name}`,
        };
    },
};

export default GoogleProvider;
