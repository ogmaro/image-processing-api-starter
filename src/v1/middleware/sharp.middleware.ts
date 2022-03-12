import sharp from 'sharp';
import utileHandeler from '../utilities/utileHandeler';
import { Request } from 'express';

const sharpConverter = async (file: Buffer, pathVarOut: string, req?: Request): Promise<object> => {
    const response = await sharp(file)
        .jpeg({ quality: utileHandeler.ConvertToNumber(Number(req?.body.quality)) })
        .resize(
            utileHandeler.ConvertToNumber(Number(req?.body.width)),
            utileHandeler.ConvertToNumber(Number(req?.body.height))
        )
        .toFile(pathVarOut);
    return {
        message: 'success',
        status: 200,
        response,
    };
};

export default sharpConverter;