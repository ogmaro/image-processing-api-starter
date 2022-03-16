import { Request, Response, NextFunction } from 'express';
import utile from '../utilities/utileHandeler';
import fs from 'fs';
import sharp from 'sharp';

/**
 * filename
 * width
 * heigth
 * quality
 */
const cache = async (req: Request, res: Response, next: NextFunction) => {

    const path = utile.filePathOutput(req.body.name, req.body.type);

    const file = fs.readFileSync(path);
    if (file) {
        const info = await sharp(file).metadata();

        if (fs.existsSync(path) && info.width === req.body.width && info.height === req.body.height) {
            res.status(302);
            res.send({ status: 'success', message: 'image already converter', path: path });
        } else {
            next();
        }
    }
    else { next(); }
};


export default cache;