import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { UserContext } from '../../contextProvider/usersProvider/userProvider';

const UserTableScreen = () => {
  const {
    createUser,
    deleteUser,
    getUsers,
    isLoadingUsers,
    selectedUser,
    setSelectedUser,
    updateUser,
    users,
  } = useContext(UserContext);
  useEffect(() => {
    async function loadData() {
      await getUsers!();
    }

    loadData();
  }, []);
  return (
    <div
     className={styles.homeContainer}
    >
      Hello in home screen
    </div>
  );
}

export default UserTableScreen;