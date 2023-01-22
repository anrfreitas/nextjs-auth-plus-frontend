import { useSession } from 'next-auth/react';
import useToaster from '@hooks/useToaster';
import Button from '@components/controls/Button';
import Modal from '@components/helpers/Modal';

interface Props {
    isOpen: boolean;
    onCloseClick: () => void;
}

const WelcomeModal = ({ isOpen, onCloseClick }: Props) => {
    const { data } = useSession();
    const { messageBox } = useToaster();

    const title = 'Welcome';

    return (
        <Modal contentLabel={title} isOpen={isOpen}>
            <Modal.Header title={title} requestClose={onCloseClick} />
            <Modal.Content>
                <div className="lg:w-full">
                    <p className="text-black text-md">Hey {data?.user.name}!</p>
                    <p className="text-black text-md">It&apos;s nice to see you here</p>

                    <div className="max-w-[328px] mx-auto mt-6">
                        <Button
                            onClick={() => {
                                onCloseClick();
                                messageBox("You're welcome!");
                            }}
                            text="Thanks"
                        />
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default WelcomeModal;
