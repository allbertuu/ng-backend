import prisma from '../../../../database/prismaClient';
import { hash } from 'bcrypt';
import { isPasswordValid, isUsernameValid } from '../../../../validations';
import {
    userAlreadyExists,
    usernameOrPasswordInvalid,
} from '../../../../errors';

export interface ICreateUser {
    username: string;
    password: string;
}

export class CreateUserUseCase {
    async execute({ username, password }: ICreateUser) {
        // validar se user já existe
        const userExists = await prisma.user.findFirst({
            where: {
                username: { equals: username, mode: 'insensitive' },
            },
        });
        if (userExists) throw new Error(userAlreadyExists.message);
        // validar username
        if (!isUsernameValid(username))
            throw new Error(usernameOrPasswordInvalid.message);
        // validar password
        if (!isPasswordValid(password))
            throw new Error(usernameOrPasswordInvalid.message);
        // criptografar a password
        const hashPassword = await hash(password, 10);
        // criar o user
        const user = await prisma.user.create({
            data: {
                username,
                password: hashPassword,
                // criar conta (Account) nova para o usuário com 100 reais de balance
                account: {
                    create: { balance: 100 * 100 }, // transformar em centavos (* 100) para facilitar manipulações
                },
            },
        });

        return user;
    }
}
