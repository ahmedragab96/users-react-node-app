import {
  User
} from '../../models/user.model';

export class UserService {
  private static instance: UserService;

  private users: User[] = [
    {
      email: 'hello@test.com',
      phone: '013284382974892',
      name: 'Ahmed Ragab',
      id: 1
    },
    {
      email: 'hello@test.com',
      phone: '013284382974892',
      name: 'Ahmed Ragab',
      id: 2
    },
    {
      email: 'hello@test.com',
      phone: '013284382974892',
      name: 'Ahmed Ragab',
      id: 3
    },
    {
      email: 'hello@test.com',
      phone: '013284382974892',
      name: 'Ahmed Ragab',
      id: 4
    }
  ];
  private index: number = 1;

  public static get Instance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public async createUser(userData: User): Promise<User> {
    try {
      userData.id = this.index;
      this.users.push(userData);
      this.index += 1;
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async getUsers(): Promise<User[]> {
    try {
      return this.users;
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(userId: number): Promise<User[]> {
    try {
      this.users = this.users.filter((user: User) => {
        return user.id !== userId;
      })
      return this.users;
    } catch (error) {
      throw error;
    }
  }

  public async getUserById(userId: number): Promise<User> {
    try {

      const user = this.users.find((user: User) => {
        return user.id === userId;
      })
      
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async updateUserById(userId: number, userData: User): Promise<void> {
    try {
      this.users.forEach((user: User) => {
        if (user.id === userId) {
          user.email = userData.email;
          user.name = userData.name;
          user.phone = userData.phone;
        }
      })
    } catch (error) {
      throw error;
    }
  }
}
