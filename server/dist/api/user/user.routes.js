"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const celebrate_1 = require("celebrate");
const express_1 = __importDefault(require("express"));
const userController = __importStar(require("./user.controller"));
const validation = __importStar(require("./user.validation"));
const Router = express_1.default.Router();
exports.Router = Router;
Router.route("/")
    /**
     * @swagger
     * /users:
     *   get:
     *     tags:
     *       - User
     *     summary: Gets users list
     *     responses:
     *       '200':
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   example: 200
     *                 message:
     *                   type: string
     *                 data:
     *                   type: object
     *                   example:
     *                     name: Ahmed
     *                     phone: Ragab
     *                     email: ahmed.ragab@test.com
     *                     id: 12
     */
    .get(userController.getUsers)
    .post(celebrate_1.celebrate(validation.addUserVerificationSchema), userController.createUser);
Router.route("/:userId")
    .get(celebrate_1.celebrate(validation.getUserVerificationSchema), userController.getUserById)
    .put(celebrate_1.celebrate(validation.updateUserVerificationSchema), userController.updateUser)
    .delete(celebrate_1.celebrate(validation.deleteUserVerificationSchema), userController.deleteUser);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3VzZXIvdXNlci5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUVtQjtBQUNuQixzREFFaUI7QUFFakIsa0VBQW9EO0FBQ3BELDhEQUFnRDtBQUdoRCxNQUFNLE1BQU0sR0FBa0IsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQXFEN0Msd0JBQU07QUFuRFIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EwQkc7S0FDRixHQUFHLENBQ0YsY0FBYyxDQUFDLFFBQVEsQ0FDeEI7S0FDQSxJQUFJLENBQ0gscUJBQVMsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsRUFDL0MsY0FBYyxDQUFDLFVBQVUsQ0FDMUIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0tBQ3ZCLEdBQUcsQ0FDRixxQkFBUyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUMvQyxjQUFjLENBQUMsV0FBVyxDQUMzQjtLQUNBLEdBQUcsQ0FDRixxQkFBUyxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxFQUNsRCxjQUFjLENBQUMsVUFBVSxDQUMxQjtLQUNBLE1BQU0sQ0FDTCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxFQUNsRCxjQUFjLENBQUMsVUFBVSxDQUMxQixDQUFDIn0=