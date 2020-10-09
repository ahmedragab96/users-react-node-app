import {
  Joi,
} from "celebrate";

const addUserVerificationSchema = {
  body: Joi.object().options({
    abortEarly: true,
  }).keys({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
  }),
};

const getUserVerificationSchema = {
  params: Joi.object().options({
    abortEarly: true,
  }).keys({
    userId: Joi.number().integer().required(),
  }),
};

const updateUserVerificationSchema = {
  params: Joi.object().options({
    abortEarly: true,
  }).keys({
    userId: Joi.number().integer().required(),
  }),
  body: Joi.object().options({
    abortEarly: true,
  }).keys({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
  }),
};

const deleteUserVerificationSchema = {
  params: Joi.object().options({
    abortEarly: true,
  }).keys({
    userId: Joi.number().integer().required(),
  })
};


export {
  addUserVerificationSchema,
  updateUserVerificationSchema,
  deleteUserVerificationSchema,
  getUserVerificationSchema,
};
