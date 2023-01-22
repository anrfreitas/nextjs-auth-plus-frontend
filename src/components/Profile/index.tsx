import { useState } from 'react';
import Container from '@components/controls/Container';
import TextInput from '@components/controls/TextInput';
import Button from '@components/controls/Button';
import Select, { Option } from '@components/controls/Select';
import Table from '@components/controls/Table';
import H1 from '@components/controls/headings/H1';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [page, setPage] = useState(0);
    const headers = ['id', 'number'];
    const items = [
        {
            id: '1',
            number: '+55 16 99999 9999',
        },
        {
            id: '2',
            number: '+55 16 99999 9999',
        },
    ];

    const userTypes: Option[] = [
        {
            text: 'Normal',
            value: 'USER',
        },
        {
            text: 'Administrator',
            value: 'ADMIN',
        },
    ];

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

    const onSaveClick = () => {
        const payload = {
            name,
            email,
            userType,
        };

        console.log('@todo - on button save click', payload);
    };
    // hide first item feature
    return (
        <Container>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-80">
                    <H1 text="Edit Profile" className="border-b" />
                    <span>Name:</span>
                    <TextInput value={name} setValue={setName} placeholder="Name" />
                    <span className="mt-3">Email:</span>
                    <TextInput disabled value={email} setValue={setEmail} placeholder="Email" />
                    <span className="mt-3">User Type:</span>
                    <Select value={userType} options={userTypes} setValue={setUserType} />
                    <Button text="Save" onClick={onSaveClick} className="mt-3" />
                </div>
                <Table
                    title="Telephone listing"
                    className="mt-5 lg:ml-5 lg:w-full lg:border lg:p-5"
                    headers={headers}
                    items={items}
                    primaryKeyItemName="id"
                    indexKeysHidden={[0]}
                    page={page}
                    hideSearchBar
                    onRemoveClick={onRemoveClick}
                    onNextPageClick={onNextPageClick}
                    onPreviousPageClick={onPreviousPageClick}
                    onRefreshTableClick={onRefreshTableClick}
                    onSearchClick={onSearchClick}
                />
            </div>
        </Container>
    );
};

export default Profile;
