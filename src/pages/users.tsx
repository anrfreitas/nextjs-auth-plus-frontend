import ManageUsers from '@/components/ManageUsers';

const ManageUsersPage: PageComponent = () => {
    return <ManageUsers />;
};

export default ManageUsersPage;

ManageUsersPage.authType = 'ADMIN';
