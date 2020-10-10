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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.deleteUser = exports.getUsers = exports.createUser = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_services_1 = require("./user.services");
const userService = user_services_1.UserService.Instance;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const user = yield userService.createUser(newUser);
        return res.status(http_status_1.default.CREATED).json({
            code: http_status_1.default.CREATED,
            message: "Successfully created user.",
            data: {
                userId: user.id,
            },
        });
    }
    catch (error) {
        return next(error);
    }
});
exports.createUser = createUser;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.getUsers();
        return res.status(http_status_1.default.CREATED).json({
            code: http_status_1.default.CREATED,
            message: "Successfully retrieved Users.",
            data: users,
        });
    }
    catch (error) {
        return next(error);
    }
});
exports.getUsers = getUsers;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = +req.params.userId;
        const users = yield userService.deleteUser(userId);
        return res.status(http_status_1.default.CREATED).json({
            code: http_status_1.default.CREATED,
            message: "Successfully deleted User.",
            data: users,
        });
    }
    catch (error) {
        return next(error);
    }
});
exports.deleteUser = deleteUser;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = +req.params.userId;
        const user = yield userService.getUserById(userId);
        return res.status(http_status_1.default.CREATED).json({
            code: http_status_1.default.CREATED,
            message: "Successfully retrieved User.",
            data: user,
        });
    }
    catch (error) {
        return next(error);
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const userId = +req.params.userId;
        yield userService.updateUserById(userId, userData);
        return res.status(http_status_1.default.CREATED).json({
            code: http_status_1.default.CREATED,
            message: "Successfully updated User.",
        });
    }
    catch (error) {
        return next(error);
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS91c2VyL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQSw4REFBcUM7QUFDckMsbURBRXlCO0FBR3pCLE1BQU0sV0FBVyxHQUFHLDJCQUFXLENBQUMsUUFBUSxDQUFDO0FBRXpDLE1BQU0sVUFBVSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDM0UsSUFBSTtRQUNGLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFekIsTUFBTSxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QyxJQUFJLEVBQUUscUJBQVUsQ0FBQyxPQUFPO1lBQ3hCLE9BQU8sRUFBRSw0QkFBNEI7WUFDckMsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTthQUNoQjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBa0VBLGdDQUFVO0FBaEVaLE1BQU0sUUFBUSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDekUsSUFBSTtRQUVGLE1BQU0sS0FBSyxHQUFHLE1BQU0sV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QyxJQUFJLEVBQUUscUJBQVUsQ0FBQyxPQUFP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