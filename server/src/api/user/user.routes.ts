import {
  celebrate,
} from "celebrate";
import express, {
  Router as ExpressRouter,
} from "express";

import * as userController from "./user.controller";
import * as validation from "./user.validation";


const Router: ExpressRouter = express.Router();

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
  .get(
    userController.getUsers,
  )
  .post(
    celebrate(validation.addUserVerificationSchema),
    userController.createUser,
  );

  Router.route("/:userId")
  .get(
    celebrate(validation.getUserVerificationSchema),
    userController.getUserById,
  )
  .put(
    celebrate(validation.updateUserVerificationSchema),
    userController.updateUser,
  )
  .delete(
    celebrate(validation.deleteUserVerificationSchema),
    userController.deleteUser,
  );

export {
  Router,
};
