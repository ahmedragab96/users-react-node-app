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
const express_1 = __importDefault(require("express"));
const userController = __importStar(require("./user.controller"));
const Router = express_1.default.Router();
exports.Router = Router;
Router.route("/")
    /**
     * @swagger
     * /users:
     *   get:
     *     parameters:
     *       - in: query
     *         name: pageNumber
     *         schema:
     *           type: number
     *       - in: query
     *         name: pageSize
     *         schema:
     *           type: number
     *       - in: query
     *         name: filterBy
     *         schema:
     *            type: string
     *            enum: [membershipId, mobileNumber]
     *       - in: query
     *         name: filterValue
     *         schema:
     *           type: string
     *       - in: query
     *         name: registrationStatus
     *         schema:
     *           type: string
     *           enum: [registered, preRegistered]
     *           default: registered
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
     *                     firstName: lorem
     *                     lastName: lorem
     *                     profilePicture: image url
     *                     phoneNumber: 01234567890
     *                     createdAt: 2019-03-19T12:02:22.151Z
     *                     userId: 1
     *                     email: user@user.com
     *                     membershipId: WDC_1
     */
    .get(userController.getUsers);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3VzZXIvdXNlci5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHNEQUVpQjtBQUVqQixrRUFBb0Q7QUFJcEQsTUFBTSxNQUFNLEdBQWtCLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUErRDdDLHdCQUFNO0FBN0RSLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXNERztLQUNGLEdBQUcsQ0FDRixjQUFjLENBQUMsUUFBUSxDQUN4QixDQUFDIn0=