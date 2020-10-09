"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor() {
        this.users = [];
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
    static get Instance() {
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
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.users;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvdXNlci91c2VyLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLE1BQWEsV0FBVztJQUF4QjtRQUdVLFVBQUssR0FBVyxFQUFFLENBQUM7UUF5QjNCLDREQUE0RDtRQUM1RCxVQUFVO1FBRVYsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixNQUFNO1FBQ04sSUFBSTtRQUVKLCtEQUErRDtRQUMvRCxVQUFVO1FBRVYsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixNQUFNO1FBQ04sSUFBSTtJQUNOLENBQUM7SUF0Q1EsTUFBTSxLQUFLLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDekIsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsVUFBVTtJQUVWLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLElBQUk7SUFFUyxRQUFROztZQUNuQixJQUFJO2dCQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sS0FBSyxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7Q0FpQkY7QUEzQ0Qsa0NBMkNDIn0=