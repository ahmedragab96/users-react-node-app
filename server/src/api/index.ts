import express, {
  Router as ExpressRouter,
} from "express";
import {
  Router as userRoutes,
} from "./user/user.routes";

const Router: ExpressRouter = express.Router();
Router.use("/users", userRoutes);

export {
  Router,
};
