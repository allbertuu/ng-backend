import { Request, Response } from 'express';
import { GetUserAccountUseCase } from './GetUserAccountUseCase';

export class GetUserAccountController {
    async handle(req: Request, res: Response) {
        // Bearer Token
        const token = req.headers.authorization?.split(' ')[1];

        const getUserAccountUseCase = new GetUserAccountUseCase();
        const result = await getUserAccountUseCase.execute({ token });

        return res.json(result);
    }
}
