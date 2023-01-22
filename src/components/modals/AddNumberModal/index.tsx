import { useState } from 'react';
import Button from '@components/controls/Button';
import Modal from '@components/helpers/Modal';
import TextInput from '@/components/controls/TextInput';

interface Props {
    isOpen: boolean;
    onSaveClick: (number: string) => void;
    onCloseClick: () => void;
}

const AddNumberModal = ({ isOpen, onSaveClick, onCloseClick }: Props) => {
    const [number, setNumber] = useState('');

    const title = 'Add number';

    return (
        <Modal contentLabel={title} isOpen={isOpen}>
            <Modal.Header title={title} requestClose={onCloseClick} />
            <Modal.Content>
                <div className="flex flex-col lg:w-full ">
                    <span>Telephone number:</span>
                    <TextInput
                        value={number}
                        setValue={setNumber}
                        placeholder="Type your number..."
                    />
                    <Button className="mt-10" onClick={() => onSaveClick(number)} text="Save" />
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default AddNumberModal;
