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
        this.users = [
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
        this.index = 1;
    }
    static get Instance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                userData.id = this.index;
                this.users.push(userData);
                this.index += 1;
                return userData;
            }
            catch (error) {
                throw error;
            }
        });
    }
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
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.users = this.users.filter((user) => {
                    return user.id !== userId;
                });
                return this.users;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = this.users.find((user) => {
                    return user.id === userId;
                });
                return user;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateUserById(userId, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.users.forEach((user) => {
                    if (user.id === userId) {
                        user.email = userData.email;
                        user.name = userData.name;
                        user.phone = userData.phone;
                    }
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvdXNlci91c2VyLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLE1BQWEsV0FBVztJQUF4QjtRQUdVLFVBQUssR0FBVztZQUN0QjtnQkFDRSxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsRUFBRSxFQUFFLENBQUM7YUFDTjtZQUNEO2dCQUNFLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLElBQUksRUFBRSxhQUFhO2dCQUNuQixFQUFFLEVBQUUsQ0FBQzthQUNOO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEVBQUUsRUFBRSxDQUFDO2FBQ047WUFDRDtnQkFDRSxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsRUFBRSxFQUFFLENBQUM7YUFDTjtTQUNGLENBQUM7UUFDTSxVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBaUU1QixDQUFDO0lBL0RRLE1BQU0sS0FBSyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3pCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRVksVUFBVSxDQUFDLFFBQWM7O1lBQ3BDLElBQUk7Z0JBQ0YsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxLQUFLLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtJQUVZLFFBQVE7O1lBQ25CLElBQUk7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25CO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxLQUFLLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxNQUFjOztZQUNwQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtvQkFDNUMsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25CO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxLQUFLLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtJQUVZLFdBQVcsQ0FBQyxNQUFjOztZQUNyQyxJQUFJO2dCQUVGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBVSxFQUFFLEVBQUU7b0JBQzFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFBO2dCQUVGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLEtBQUssQ0FBQzthQUNiO1FBQ0gsQ0FBQztLQUFBO0lBRVksY0FBYyxDQUFDLE1BQWMsRUFBRSxRQUFjOztZQUN4RCxJQUFJO2dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBVSxFQUFFLEVBQUU7b0JBQ2hDLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7cUJBQzdCO2dCQUNILENBQUMsQ0FBQyxDQUFBO2FBQ0g7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLEtBQUssQ0FBQzthQUNiO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUE5RkQsa0NBOEZDIn0=