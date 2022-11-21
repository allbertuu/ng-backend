import { Request, Response } from 'express';
import { ListTransactionsUseCase } from './ListTransactionsUseCase';

export class ListTransactionsController {
    async handle(req: Request, res: Response) {
        // Bearer Token
        const token = req.headers.authorization?.split(' ')[1];

        const listTransactionsUseCase = new ListTransactionsUseCase();
        const result = await listTransactionsUseCase.execute({ token });

        return res.json(result);
    }
}
