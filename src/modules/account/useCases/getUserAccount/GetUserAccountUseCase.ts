import prisma from '../../../../database/prismaClient';
import { userIsNotAuthorized } from '../../../../errors';
import { validateJWTToken } from '../../../../middlewares';

interface IGetUserAccount {
    token?: string;
}

export class GetUserAccountUseCase {
    async execute({ token }: IGetUserAccount) {
        const { decodedToken } = validateJWTToken(token);
        const userId = decodedToken.sub;

        const userAccount = await prisma.account.findFirst({
            where: {
                user: { id: userId },
            },
        });

        if (!userAccount) throw new Error(userIsNotAuthorized.message);

        return userAccount;
    }
}
