import { useSession } from 'next-auth/react';

import SideMenu from '../SideMenu';

const Dashboard = () => {
    const { data } = useSession();

    return (
        <SideMenu>
            <div className="flex flex-col bg-white p-4 w-[250px]">Welcome {data?.user.name}!</div>
        </SideMenu>
    );
};

export default Dashboard;
