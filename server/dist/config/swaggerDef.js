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
exports.initDocs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerUi = __importStar(require("swagger-ui-express"));
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Users",
        version: "1.0.0",
        description: "Users API",
    },
    basePath: "/api/v1",
};
const options = {
    swaggerDefinition,
    apis: [`${__dirname}/../api/**/*.routes.js`],
};
const swaggerSpec = swagger_jsdoc_1.default(options);
function initDocs(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api-docs.json", (req, res) => res.json(swaggerSpec));
}
exports.initDocs = initDocs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlckRlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvc3dhZ2dlckRlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Esa0VBQXlDO0FBQ3pDLDhEQUFnRDtBQUVoRCxNQUFNLGlCQUFpQixHQUFHO0lBQ3hCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLE9BQU87UUFDaEIsV0FBVyxFQUFFLFdBQVc7S0FDekI7SUFDRCxRQUFRLEVBQUUsU0FBUztDQUNwQixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUc7SUFDZCxpQkFBaUI7SUFDakIsSUFBSSxFQUFFLENBQUMsR0FBRyxTQUFTLHdCQUF3QixDQUFDO0NBQzdDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyx1QkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTFDLFNBQWdCLFFBQVEsQ0FBQyxHQUFnQjtJQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRSxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFIRCw0QkFHQyJ9