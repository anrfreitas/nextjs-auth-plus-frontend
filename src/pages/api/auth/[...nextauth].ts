import NextAuth, { User } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import Credentials, { CredentialInput } from 'next-auth/providers/credentials';
import PrismaClient from 'src/pages/api/helpers/auth/PrismaClient';
import Hasher from '@/pages/api/helpers/hash/Hasher';
import GoogleProvider from '@/pages/api/helpers/providers/GoogleProvider';

const prisma = PrismaClient;

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60, // 24h
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        GoogleProvider,
        Credentials<UserCredentials>({
            id: 'users',
            name: 'Users',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email) {
                    throw new Error('invalid');
                }

                const account = await prisma.account.findUnique({
                    where: {
                        email: credentials.email.toLowerCase(),
                    },
                    include: {
                        user: true,
                    },
                });

                if (!account) {
                    throw new Error('invalid');
                }

                if (!(await Hasher.verify(account.password, credentials?.password ?? ''))) {
                    throw new Error('wrong_password');
                }

                return account.user as User;
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account.type === 'oauth' && user.email) {
                const existingUser = await prisma.user.findUnique({
                    where: {
                        email: user.email,
                    },
                });

                if (existingUser) {
                    await prisma.account.upsert({
                        where: {
                            provider_providerAccountId: {
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                            },
                        },
                        update: {
                            ...account,
                        },
                        create: {
                            ...account,
                            userId: existingUser.id,
                        },
                    });
                }
            }
            return true;
        },
        async jwt({ token, user, account }) {
            const $user: User = token.user ?? user;

            return {
                ...token,
                authType: $user?.userType === 'USER' ? 'USER' : 'ADMIN1',
                user: $user,
                account: token.account ?? account,
            };
        },
        async session({ token, session }) {
            const user = (await prisma.user.findUnique({
                where: {
                    id: token.sub,
                },
            })) as User;

            return {
                authType: user.userType === 'USER' ? 'USER' : 'ADMIN',
                user,
                account: token.account,
                expires: session.expires,
            };
        },
    },
    events: {
        async signIn({ user, account }) {
            // @TODO
            console.log(user, account);
        },
        async signOut({ token }) {
            // @TODO
            console.log(token);
        },
        async createUser({ user }) {
            // @TODO
            console.log(user);
        },
    },
    cookies: {
        sessionToken: {
            name: `app.session-token`,
            options: {
                httpOnly: false,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        callbackUrl: {
            name: 'app.callback_url',
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        csrfToken: {
            name: `app.csrf-token`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        pkceCodeVerifier: {
            name: `app.pkce.code_verifier`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        state: {
            name: `app.state`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
    },
});

type UserCredentials = {
    email: CredentialInput;
    password: CredentialInput;
};
