import { useState } from 'react';
import Container from '@components/controls/Container';
import Table from '@components/controls/Table';

const ManageUsers = () => {
    const [page, setPage] = useState(0);

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
        console.log('@todo - edit action', id);
    };

    const onRemoveClick = (id: string) => {
        console.log('@todo - remove action', id);
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
        console.log('@todo - on refresh table click action');
    };

    const onSearchClick = (searchTerm: string) => {
        console.log('@todo - on search click action', searchTerm);
    };

    return (
        <Container>
            <Table
                title="Users listing"
                headers={headers}
                items={items}
                keyItemName="id"
                page={page}
                onEditClick={onEditClick}
                onRemoveClick={onRemoveClick}
                onNextPageClick={onNextPageClick}
                onPreviousPageClick={onPreviousPageClick}
                onRefreshTableClick={onRefreshTableClick}
                onSearchClick={onSearchClick}
            />
        </Container>
    );
};

export default ManageUsers;
