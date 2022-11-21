import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import prisma from '../../../../database/prismaClient';
import {
    userIsNotRegistered,
    usernameOrPasswordInvalid,
} from '../../../../errors';
import { ICreateUser } from '../createUser/CreateUserUseCase';

interface IAuthenticateUser extends ICreateUser {}

export class AuthenticateUserUseCase {
    async execute({ username, password }: IAuthenticateUser) {
        // verificar se o user está cadastrado
        const user = await prisma.user.findFirst({
            where: { username: { equals: username, mode: 'insensitive' } },
        });
        if (!user) throw new Error(userIsNotRegistered.message);
        // verificar se a password corresponde ao username
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) throw new Error(usernameOrPasswordInvalid.message);
        // gerar token
        const token = sign({ username }, process.env.SECRET_TOKEN!, {
            subject: user.id,
            expiresIn: '1d', // 24 hours
        });

        return { token };
    }
}
