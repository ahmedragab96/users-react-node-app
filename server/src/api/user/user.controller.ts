import {
  NextFunction, Request, Response,
} from "express";
import httpStatus from "http-status";
import {
  UserService,
} from "./user.services";


const userService = UserService.Instance;

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
    
//     return res.status(httpStatus.CREATED).json({
//       code: httpStatus.CREATED,
//       message: "Successfully created user.",
//       data: {
//         userId: createdEventCategory.id,
//       },
//     });
//   } catch (error) {
//     return next(error);
//   }
// };

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const users = userService.getUsers();

    return res.status(httpStatus.CREATED).json({
      code: httpStatus.CREATED,
      message: "Successfully retrieved Users.",
      data: users,
    });
  } catch (error) {
    return next(error);
  }
};

// const getUserById = async (req: Request, res: Response, next: NextFunction) => {
//   try {

//     return res.status(httpStatus.CREATED).json({
//       code: httpStatus.CREATED,
//       message: "Successfully retrieved User.",
//       data: user,
//     });
//   } catch (error) {
//     return next(error);
//   }
// };

// const updateUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {

//     return res.status(httpStatus.CREATED).json({
//       code: httpStatus.CREATED,
//       message: "Successfully updated User.",
//     });
//   } catch (error) {
//     return next(error);
//   }
// };

export {
  // createUser,
  getUsers,
  // getUserById,
  // updateUser,
};
