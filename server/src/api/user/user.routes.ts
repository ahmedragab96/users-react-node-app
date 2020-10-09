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
  .get(
    userController.getUsers,
  );

export {
  Router,
};
