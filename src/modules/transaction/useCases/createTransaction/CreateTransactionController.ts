import { Request, Response } from 'express';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
    async handle(req: Request, res: Response) {
        const { creditedUsername, value } = req.body;
        // Bearer Token
        const token = req.headers.authorization?.split(' ')[1];

        const createTransactionUseCase = new CreateTransactionUseCase();
        const result = await createTransactionUseCase.execute({
            creditedUsername,
            value,
            token,
        });

        return res.json(result);
    }
}
