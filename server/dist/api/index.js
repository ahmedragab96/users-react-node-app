"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./user/user.routes");
const Router = express_1.default.Router();
exports.Router = Router;
Router.use("/users", user_routes_1.Router);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUVpQjtBQUNqQixvREFFNEI7QUFFNUIsTUFBTSxNQUFNLEdBQWtCLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFJN0Msd0JBQU07QUFIUixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxvQkFBVSxDQUFDLENBQUMifQ==