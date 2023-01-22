import { useState } from 'react';
import { UserType } from '@nestjs-prisma/database';
import Container from '@components/controls/Container';
import Table from '@components/controls/Table';
import EditUserTypeModal from '@components/modals/EditUserTypeModal';
import useToaster from '@hooks/useToaster';

const ManageUsers = () => {
    const [page, setPage] = useState(0);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const { messageBox } = useToaster();

    const headers = ['id', 'name', 'email', 'type'];
    const items = [
        {
            id: '1',
            name: 'john',
            email: 'john@doe.com',
            type: 'USER',
        },
        {
            id: '2',
            name: 'maria',
            email: 'maria@doe.com',
            type: 'USER',
        },
        {
            id: '3',
            name: 'robert',
            email: 'robert@doe.com',
            type: 'USER',
        },
        {
            id: '4',
            name: 'andrew',
            email: 'andrew@doe.com',
            type: 'ADMIN',
        },
    ];

    const onEditClick = (id: string) => {
        setEditModalOpen(true);
        console.log('@todo - edit action', id);
    };

    const onNextPageClick = () => {
        setPage(page);
        console.log('@todo - on next page click action');
    };

    const onPreviousPageClick = () => {
        setPage(page);
        console.log('@todo - on previous page click action');
    };

    const onRefreshTableClick = () => {
        messageBox('Refreshing table data...');
        console.log('@todo - on refresh table click action');
    };

    const onSearchClick = (searchTerm: string) => {
        console.log('@todo - on search click action', searchTerm);
    };

    const onCloseModalClick = () => {
        setEditModalOpen(false);
    };

    const onSaveModalClick = (userType: UserType) => {
        setEditModalOpen(false);
        console.log('@todo - on modal save click action', userType);
    };

    return (
        <Container>
            <Table
                title="User listing"
                headers={headers}
                items={items}
                primaryKeyItemName="id"
                indexKeysHidden={[]}
                page={page}
                onEditClick={onEditClick}
                onNextPageClick={onNextPageClick}
                onPreviousPageClick={onPreviousPageClick}
                onRefreshTableClick={onRefreshTableClick}
                onSearchClick={onSearchClick}
            />
            <EditUserTypeModal
                isOpen={editModalOpen}
                onCloseClick={onCloseModalClick}
                onSaveClick={onSaveModalClick}
            />
        </Container>
    );
};

export default ManageUsers;
