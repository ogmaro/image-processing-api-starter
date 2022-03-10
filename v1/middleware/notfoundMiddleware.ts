import { Request, Response } from 'express';

export const pageNotFound404 = (req: Request, res: Response) => {
    res.status(404);
    res.send({message:'route not found'});
};