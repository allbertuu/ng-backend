import prisma from '../../../../database/prismaClient';
import {
    accountDoesntExist,
    userCantTransferToHimself,
    userDoesntExist,
} from '../../../../errors';
import { validateJWTToken } from '../../../../middlewares';

export interface ICreateTransaction {
    value: number;
    creditedUsername: string;
    token?: string;
}

export class CreateTransactionUseCase {
    async execute({ creditedUsername, value, token }: ICreateTransaction) {
        // validar token JWT
        const { decodedToken } = validateJWTToken(token); //username E userId
        const debitedUsername = decodedToken.username;
        const debitedUserId = decodedToken.sub;
        // validar se o username do creditedUsername existe em User
        const creditedUser = await prisma.user.findFirst({
            where: { username: creditedUsername },
        });
        if (!creditedUser) throw new Error(userDoesntExist.message);
        // validar se a transação não está está sendo feita para ele mesmo
        if (debitedUsername === creditedUsername) {
            throw new Error(userCantTransferToHimself.message);
        }

        // atualizar o balance da conta que irá depositar - debitedAccount
        const debitedAccount = await prisma.account.findFirst({
            where: { user: { id: debitedUserId } },
        });
        if (!debitedAccount) throw new Error(accountDoesntExist.message);

        await prisma.account.update({
            where: { id: debitedAccount.id },
            data: {
                balance: { decrement: value },
            },
        });

        // atualizar o balance da conta que sofrerá o depósito - creditedAccount
        const creditedAccount = await prisma.account.findFirst({
            where: { user: { id: creditedUser.id } },
        });
        if (!creditedAccount) throw new Error(accountDoesntExist.message);

        await prisma.account.update({
            where: {
                id: creditedAccount.id,
            },
            data: { balance: { increment: value } },
        });

        // criar transação
        const transaction = await prisma.transaction.create({
            data: {
                value,
                debitedAccount: { connect: { id: debitedAccount.id } }, // depósito (quem deu)
                creditedAccount: {
                    connect: { id: creditedAccount.id }, // saque (quem recebeu)
                },
            },
        });

        return transaction;
    }
}
