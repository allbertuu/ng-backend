import { NextFunction, Request, Response } from 'express';
// user já existe
export const userAlreadyExists = {
    message: 'User already exists',
    statusCode: 409,
    status: 'Conflict',
};
// username ou password é inválido
export const usernameOrPasswordInvalid = {
    message: 'Username or password is invalid',
    statusCode: 400,
    status: 'Bad Request',
};
// username não está cadastrado
export const userIsNotRegistered = {
    message: 'User is not registered',
    statusCode: 404,
    status: 'Not Found',
};

export function handleErrors(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (err.message === userAlreadyExists.message)
        return res.status(userAlreadyExists.statusCode).json(userAlreadyExists);
    if (err.message === usernameOrPasswordInvalid.message)
        return res
            .status(usernameOrPasswordInvalid.statusCode)
            .json(usernameOrPasswordInvalid);
    if (err.message === userIsNotRegistered.message)
        return res
            .status(userIsNotRegistered.statusCode)
            .json(userIsNotRegistered);

    return res
        .status(500)
        .json({ statusCode: 500, status: 'Internal server error' });
}
