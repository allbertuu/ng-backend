import { NextFunction, Request, Response } from 'express';
// user já existe
export const userAlreadyExists = {
    message: 'User already exists',
    statusCode: 409,
    status: 'Conflict',
};

export const usernameOrPasswordInvalid = {
    message: 'Username or password is invalid',
    statusCode: 401,
    status: 'Unauthorized',
};

export const userIsNotRegistered = {
    message: 'User is not registered',
    statusCode: 404,
    status: 'Not Found',
};

export const userIsNotAuthorized = {
    message: 'User is not authorized to do it',
    statusCode: 401,
    status: 'Unauthorized',
};

export const userTokenIsInvalid = {
    message: 'Token not present or invalid.',
    statusCode: 401,
    status: 'Unauthorized',
};

export const userCantTransferToHimself = {
    message: "You can't transfer money to yourself",
    statusCode: 401,
    status: 'Unauthorized',
};

export const userDoesntExist = {
    message: 'Username is wrong or user was not found',
    statusCode: 404,
    status: 'Not Found',
};

export const accountDoesntExist = {
    message: 'Debited or credited account was not found',
    statusCode: 404,
    status: 'Not Found',
};

const errors = [
    userAlreadyExists,
    usernameOrPasswordInvalid,
    userIsNotRegistered,
    userIsNotAuthorized,
    userTokenIsInvalid,
    userCantTransferToHimself,
    userDoesntExist,
    accountDoesntExist,
];

export function handleErrors(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    errors.forEach((errorObj) => {
        if (err.message === errorObj.message)
            return res.status(errorObj.statusCode).json(errorObj);
    });

    return res
        .status(500)
        .json({ statusCode: 500, status: 'Internal server error' });
}
