import prisma from '../../../../database/prismaClient';

export class ListUsersUseCase {
    async execute() {
        const users = await prisma.user.findMany({
            include: { account: { select: { balance: true } } },
        });

        return users;
    }
}
