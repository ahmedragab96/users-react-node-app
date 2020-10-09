import {
  Application, Request, Response,
} from "express";
import swaggerJSDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

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

const swaggerSpec = swaggerJSDoc(options);

export function initDocs(app: Application) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api-docs.json", (req: Request, res: Response) => res.json(swaggerSpec));
}
