import React, { createContext, useState } from 'react';
import { UserContextProps, Props, User } from './types';
import instance from '../../connection/appConnection';

export const UserContext = createContext<Partial<UserContextProps>>({});

export const UsersProvider: React.FC<Props> = (props: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const getUsers = async () => {
    try {
      setIsLoadingUsers(true);
      const response = await instance.get('/users');
      if (response.data.length) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const createUser = async (userData: User) => {
    try {
      setIsLoadingUsers(true);
      const response = await instance.post('/users', userData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const updateUser = async (userId: number, userData: User) => {
    try {
      setIsLoadingUsers(true);
      const response = await instance.put(`/users/${userId}`, userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const deleteUser = async (userId: number) => {
    try {
      const response = await instance.delete(`/users/${userId}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        deleteUser,
        getUsers,
        isLoadingUsers,
        selectedUser,
        setSelectedUser,
        updateUser,
        users,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
