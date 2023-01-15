import { User as PrismaUser } from '@nestjs-prisma/database';
import { Account } from 'next-auth';

declare module 'next-auth' {
    type User = OnlyRequiredAt<PrismaUser, 'id' | 'userType' | 'name'>;

    type DefaultUser = User;

    interface Session {
        authType: 'USER' | 'ADMIN';
        user: User;
        account: Account;
        expires: string;
    }
}

declare module 'next-auth/react' {
    import { Session } from 'next-auth';

    declare function useSession<R extends boolean = true>(): SessionValue<R>;

    type SessionValue<R extends boolean> = R extends true
        ? {
              data: Session;
              status: 'authenticated';
          }
        :
              | {
                    data: Session;
                    status: 'authenticated';
                }
              | {
                    data: null;
                    status: 'unauthenticated' | 'loading';
                };
}

declare module 'next-auth/jwt' {
    import { User } from 'next-auth';

    interface JWT {
        user: User;
        account: Account;
    }
}
