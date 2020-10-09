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
exports.getUsers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_services_1 = require("./user.services");
const userService = user_services_1.UserService.Instance;
// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     return res.status(httpStatus.CREATED).json({
//       code: httpStatus.CREATED,
//       message: "Successfully created user.",
//       data: {
//         userId: createdEventCategory.id,
//       },
//     });
//   } catch (error) {
//     return next(error);
//   }
// };
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = userService.getUsers();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS91c2VyL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQSw4REFBcUM7QUFDckMsbURBRXlCO0FBR3pCLE1BQU0sV0FBVyxHQUFHLDJCQUFXLENBQUMsUUFBUSxDQUFDO0FBRXpDLGtGQUFrRjtBQUNsRixVQUFVO0FBRVYsbURBQW1EO0FBQ25ELGtDQUFrQztBQUNsQywrQ0FBK0M7QUFDL0MsZ0JBQWdCO0FBQ2hCLDJDQUEyQztBQUMzQyxXQUFXO0FBQ1gsVUFBVTtBQUNWLHNCQUFzQjtBQUN0QiwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLEtBQUs7QUFFTCxNQUFNLFFBQVEsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ3pFLElBQUk7UUFFRixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pDLElBQUksRUFBRSxxQkFBVSxDQUFDLE9BQU87WUFDeEIsT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBNkJBLDRCQUFRIn0=