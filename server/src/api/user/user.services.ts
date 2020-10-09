import {
  User
} from '../../models/user.model';

export class UserService {
  private static instance: UserService;

  private users: User[] = [];

  public static get Instance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  // public async createUser(userData: User): Promise<User> {
  //   try {
      
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  public async getUsers(): Promise<User[]> {
    try {
      return this.users;
    } catch (error) {
      throw error;
    }
  }

  // public async getUserById(userId: number): Promise<User> {
  //   try {
      
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // public async updateUserById(userData: User): Promise<void> {
  //   try {

  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
