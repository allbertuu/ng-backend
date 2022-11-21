import prisma from '../../../../database/prismaClient';
import { userTokenIsInvalid } from '../../../../errors';
import { validateJWTToken } from '../../../../middlewares';

interface IListTransactions {
    token?: string;
}

export class ListTransactionsUseCase {
    async execute({ token }: IListTransactions) {
        const { isValid } = validateJWTToken(token);
        if (!isValid) throw new Error(userTokenIsInvalid.message);

        const transactions = await prisma.transaction.findMany({ take: 10 });

        return transactions;
    }
}
