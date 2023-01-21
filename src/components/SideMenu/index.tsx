import { signOut, useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';
import useRedirect from '@/hooks/useRedirect';

type Props = {
    children: JSX.Element;
};

type MenuItem = {
    label: string;
    icon: JSX.Element;
    adminOnly: boolean;
    redirect: () => Promise<boolean>;
};

// @TODO - make it responsive
export default function Sidebar({ children }: Props) {
    const redirect = useRedirect();
    const { data } = useSession();

    const menuItems: MenuItem[] = [
        {
            label: 'Home',
            icon: (
                <FontAwesomeIcon
                    icon={freeSolidIcons.faHome}
                    className="h-5 w-5 ml-1 align-middle"
                />
            ),
            adminOnly: false,
            redirect: redirect.redirectToDashboard,
        },
        {
            label: 'Users',
            icon: (
                <FontAwesomeIcon
                    icon={freeSolidIcons.faUsers}
                    className="h-5 w-5 ml-1 align-middle"
                />
            ),
            adminOnly: true,
            redirect: redirect.redirectToManageUsers,
        },
        {
            label: 'My account',
            icon: (
                <FontAwesomeIcon
                    icon={freeSolidIcons.faUser}
                    className="h-5 w-5 ml-1 align-middle"
                />
            ),
            adminOnly: false,
            redirect: redirect.redirectToDashboard,
        },
    ];

    const getMenuItem = (item: MenuItem, index: number): JSX.Element => {
        return (
            <li key={`${item.label}-${index}`} className="rounded-sm">
                <button
                    onClick={item.redirect}
                    className="flex items-center p-2 space-x-3 rounded-md"
                >
                    {item.icon}
                    <span>{item.label}</span>
                </button>
            </li>
        );
    };

    const onLogoutButtonClick = async () => {
        await signOut();
    };

    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-silver-ultra-light shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Menu</h2>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button type="submit" className="p-2 focus:outline-none focus:ring">
                                <FontAwesomeIcon
                                    icon={freeSolidIcons.faMagnifyingGlass}
                                    className="h-4 w-4 align-middle"
                                />
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {menuItems.map((item, index) => {
                                if (item.adminOnly && data.authType !== 'ADMIN')
                                    return <div key={index}></div>;
                                return getMenuItem(item, index);
                            })}

                            <li className="rounded-sm">
                                <button
                                    onClick={onLogoutButtonClick}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FontAwesomeIcon
                                        icon={freeSolidIcons.faRightFromBracket}
                                        className="h-5 w-5 ml-1 align-middle"
                                    />
                                    <span>Logout</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container ml-5 mt-8">{children}</div>
        </div>
    );
}
