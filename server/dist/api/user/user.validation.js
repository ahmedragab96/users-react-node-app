"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserVerificationSchema = exports.updateUserVerificationSchema = exports.addUserVerificationSchema = void 0;
const celebrate_1 = require("celebrate");
const addUserVerificationSchema = {
    body: celebrate_1.Joi.object().options({
        abortEarly: true,
    }).keys({
        membershipId: celebrate_1.Joi.string().required(),
        sequenceNumber: celebrate_1.Joi.string().required(),
    }),
};
exports.addUserVerificationSchema = addUserVerificationSchema;
const updateUserVerificationSchema = {
    body: celebrate_1.Joi.object().options({
        abortEarly: true,
    }).keys({
        membershipId: celebrate_1.Joi.string().required(),
        sequenceNumber: celebrate_1.Joi.string().required(),
    }),
};
exports.updateUserVerificationSchema = updateUserVerificationSchema;
const deleteUserVerificationSchema = {
    body: celebrate_1.Joi.object().options({
        abortEarly: true,
    }).keys({
        membershipId: celebrate_1.Joi.string().required(),
        sequenceNumber: celebrate_1.Joi.string().required(),
    }),
};
exports.deleteUserVerificationSchema = deleteUserVerificationSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci52YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS91c2VyL3VzZXIudmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FFbUI7QUFFbkIsTUFBTSx5QkFBeUIsR0FBRztJQUNoQyxJQUFJLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUN6QixVQUFVLEVBQUUsSUFBSTtLQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ04sWUFBWSxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDckMsY0FBYyxFQUFFLGVBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDeEMsQ0FBQztDQUNILENBQUM7QUFzQkEsOERBQXlCO0FBcEIzQixNQUFNLDRCQUE0QixHQUFHO0lBQ25DLElBQUksRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ3pCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDTixZQUFZLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUNyQyxjQUFjLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtLQUN4QyxDQUFDO0NBQ0gsQ0FBQztBQWNBLG9FQUE0QjtBQVo5QixNQUFNLDRCQUE0QixHQUFHO0lBQ25DLElBQUksRUFBRSxlQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ3pCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDTixZQUFZLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUNyQyxjQUFjLEVBQUUsZUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtLQUN4QyxDQUFDO0NBQ0gsQ0FBQztBQU1BLG9FQUE0QiJ9