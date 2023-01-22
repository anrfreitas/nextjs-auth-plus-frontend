import { useState } from 'react';
import { UserType } from '@nestjs-prisma/database';
import Button from '@components/controls/Button';
import Modal from '@components/helpers/Modal';
import Select, { Option } from '@components/controls/Select';

interface Props {
    isOpen: boolean;
    onSaveClick: (userType: UserType) => void;
    onCloseClick: () => void;
}

const EditUserTypeModal = ({ isOpen, onSaveClick, onCloseClick }: Props) => {
    const [userType, setUserType] = useState('USER');

    const userTypes: Option[] = [
        {
            text: 'User',
            value: 'USER',
        },
        {
            text: 'Administrator',
            value: 'ADMIN',
        },
    ];

    const title = 'Edit user type';

    return (
        <Modal contentLabel={title} isOpen={isOpen}>
            <Modal.Header title={title} requestClose={onCloseClick} />
            <Modal.Content>
                <div className="flex flex-col lg:w-full ">
                    <span>User type:</span>
                    <Select value={userType} options={userTypes} setValue={setUserType} />
                    <Button
                        className="mt-10"
                        onClick={() => onSaveClick(userType as UserType)}
                        text="Save"
                    />
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default EditUserTypeModal;
