import {
  Joi,
} from "celebrate";

const addUserVerificationSchema = {
  body: Joi.object().options({
    abortEarly: true,
  }).keys({
    membershipId: Joi.string().required(),
    sequenceNumber: Joi.string().required(),
  }),
};

const updateUserVerificationSchema = {
  body: Joi.object().options({
    abortEarly: true,
  }).keys({
    membershipId: Joi.string().required(),
    sequenceNumber: Joi.string().required(),
  }),
};

const deleteUserVerificationSchema = {
  body: Joi.object().options({
    abortEarly: true,
  }).keys({
    membershipId: Joi.string().required(),
    sequenceNumber: Joi.string().required(),
  }),
};


export {
  addUserVerificationSchema,
  updateUserVerificationSchema,
  deleteUserVerificationSchema,
};
