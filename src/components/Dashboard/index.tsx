import { useSession } from 'next-auth/react';
import { useState } from 'react';
import WelcomeModal from '../modals/WelcomeModal';

import SideMenu from '../SideMenu';

const Dashboard = () => {
    const { data } = useSession();
    const [open, setOpen] = useState(false);

    const toggleModal = () => setOpen(!open);

    return (
        <SideMenu>
            <div className="flex flex-col bg-white p-4">
                Welcome {data?.user.name}!
                <p className="mt-3">
                    I want to show you something,&nbsp;
                    <button className="font-semibold" onClick={toggleModal}>
                        click here
                    </button>
                    .
                </p>
                <WelcomeModal isOpen={open} onCloseEvent={() => toggleModal()} />
            </div>
        </SideMenu>
    );
};

export default Dashboard;
