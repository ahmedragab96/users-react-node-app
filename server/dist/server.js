"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./api/index");
// Create a new express app instance
const app = express_1.default();
app.use("/api/v1", index_1.Router);
app.listen(8080, function () {
    console.log('App is listening on port 3000!');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qix1Q0FFcUI7QUFFckIsb0NBQW9DO0FBQ3BDLE1BQU0sR0FBRyxHQUF3QixpQkFBTyxFQUFFLENBQUM7QUFFM0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBRyxDQUFDLENBQUM7QUFFeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUMifQ==