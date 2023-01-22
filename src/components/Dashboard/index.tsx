import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Container from '@components/controls/Container';
import WelcomeModal from '@components/modals/WelcomeModal';

const Dashboard = () => {
    const { data } = useSession();
    const [open, setOpen] = useState(false);

    const toggleModal = () => setOpen(!open);

    return (
        <Container>
            Welcome {data?.user.name}!
            <p className="mt-3">
                I want to show you something,&nbsp;
                <button className="font-semibold" onClick={toggleModal}>
                    click here
                </button>
                .
            </p>
            <WelcomeModal isOpen={open} onCloseClick={toggleModal} />
        </Container>
    );
};

export default Dashboard;
