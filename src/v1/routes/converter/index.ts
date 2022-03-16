import { Request, Response, Router } from 'express';
import convert from '../../utilities/convertHandler';
import cache from '../../middleware/cache.middleware';

const converter = Router();



// convert image using filesystem
converter.get('/', cache, async (req: Request, res: Response) => {
  convert.file(res, req);
});

// convert image using image link
converter.post('/', async (req: Request, res: Response) => {
  convert.link(req, res);
});

export default converter;