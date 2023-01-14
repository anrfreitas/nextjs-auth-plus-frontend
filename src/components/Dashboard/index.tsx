import { signOut } from 'next-auth/react';

const Dashboard = () => {
    const onLogoutButtonClick = async () => {
        await signOut();
    };

    return (
        <div className="flex flex-col bg-white p-4 w-[250px]">
            Welcome!
            <button className="btn btn-blue mt-3 p-2" onClick={onLogoutButtonClick}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
