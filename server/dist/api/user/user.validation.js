"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserVerificationSchema = exports.deleteUserVerificationSchema = exports.updateUserVerificationSchema = exports.addUserVerificationSchema = void 0;
const celebrate_1 = require("celebrate");
const addUserVerificationSchema = {
    body: celebrate_1.Joi.object().options({
        abortEarly: true,
    }).keys({
        name: celebrate_1.Joi.string().required(),
        phone: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required(),
    }),
};
exports.addUserVerificationSchema = addUserVerificationSchema;
const getUserVerificationSchema = {
    params: celebrate_1.Joi.object().options({
        abortEarly: true,
    }).keys({
        userId: celebrate_1.Joi.number().integer().required(),
    }),
};
exports.getUserVerificationSchema = getUserVerificationSchema;
const updateUserVerificationSchema = {
    params: celebrate_1.Joi.object().options({
        abortEarly: true,
    }).keys({
        userId: celebrate_1.Joi.number().integer().required(),
    }),
    body: celebrate_1.Joi.object().options({
        abortEarly: true,
    }).keys({
        name: celebrate_1.Joi.string().required(),
        phone: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required(),
    }),
};
exports.updateUserVerificationSchema = updateUserVerificationSchema;
const deleteUserVerificationSchema = {
    params: celebrate_1.Joi.object().options({
        abortEarly: true,
    }).keys({
        userId: celebrate_1.Joi.number().integer().required(),
    })
};
exports.deleteUserVerificationSchema = deleteUserVerificationSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci52YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS91c2VyL3VzZXIudmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FFbUI7QUFFbkIsTUFBTSx5QkFBeUIsR0FBRztJQUNoQyxJQUFJLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUN6QixVQUFVLEVBQUUsSUFBSTtLQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ04sSUFBSSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDOUIsS0FBSyxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDL0IsQ0FBQztDQUNILENBQUM7QUFtQ0EsOERBQXlCO0FBakMzQixNQUFNLHlCQUF5QixHQUFHO0lBQ2hDLE1BQU0sRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQzNCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDTixNQUFNLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRTtLQUMxQyxDQUFDO0NBQ0gsQ0FBQztBQThCQSw4REFBeUI7QUE1QjNCLE1BQU0sNEJBQTRCLEdBQUc7SUFDbkMsTUFBTSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDM0IsVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNOLE1BQU0sRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFO0tBQzFDLENBQUM7SUFDRixJQUFJLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUN6QixVQUFVLEVBQUUsSUFBSTtLQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ04sSUFBSSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDOUIsS0FBSyxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDL0IsQ0FBQztDQUNILENBQUM7QUFhQSxvRUFBNEI7QUFYOUIsTUFBTSw0QkFBNEIsR0FBRztJQUNuQyxNQUFNLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUMzQixVQUFVLEVBQUUsSUFBSTtLQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ04sTUFBTSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDMUMsQ0FBQztDQUNILENBQUM7QUFNQSxvRUFBNEIifQ==