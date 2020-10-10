export type UserContextProps = {
  users: User[];
  isLoadingUsers: boolean;
  selectedUser: User | null;
  getUsers: () => Promise<void>;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
  updateUser: (userId: number, userData: User) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
  createUser: (userData: User) => Promise<void>;
};

export interface User {
  name: string;
  email: string;
  phone: string;
  id?: number;
}

export interface Props {
  children: React.ReactNode;
}