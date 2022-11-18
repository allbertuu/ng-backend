// user já existe
export const userAlreadyExists = {
    message: "User already exists",
    statusCode: 409,
    error: "Conflict",
};
// username ou password é inválido
export const usernameOrPasswordInvalid = {
    message: "Username or password is invalid",
    statusCode: 400,
    error: "Bad Request",
};
// username não está cadastrado
export const userIsNotRegistered = {
    message: "User is not registered",
    statusCode: 404,
    error: "Not Found",
};
