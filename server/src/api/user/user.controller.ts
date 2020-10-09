import {
  NextFunction, Request, Response,
} from "express";
import httpStatus from "http-status";
import {
  UserService,
} from "./user.services";


const userService = UserService.Instance;

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = req.body;

    const user = await userService.createUser(newUser);
    
    return res.status(httpStatus.CREATED).json({
      code: httpStatus.CREATED,
      message: "Successfully created user.",
      data: {
        userId: user.id,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const users = await userService.getUsers();

    return res.status(httpStatus.CREATED).json({
      code: httpStatus.CREATED,
      message: "Successfully retrieved Users.",
      data: users,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = +req.params.userId;

    const users = await userService.deleteUser(userId);

    return res.status(httpStatus.CREATED).json({
      code: httpStatus.CREATED,
      message: "Successfully deleted User.",
      data: users,
    });
  } catch (error) {
    return next(error);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = +req.params.userId;

    const user = await userService.getUserById(userId);

    return res.status(httpStatus.CREATED).json({
      code: httpStatus.CREATED,
      message: "Successfully retrieved User.",
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const userId = +req.params.userId;

    await userService.updateUserById(userId, userData);

    return res.status(httpStatus.CREATED).json({
      code: httpStatus.CREATED,
      message: "Successfully updated User.",
    });
  } catch (error) {
    return next(error);
  }
};

export {
  createUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
