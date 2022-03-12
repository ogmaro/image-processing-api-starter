import { Request, Response, Router } from 'express';
import convert from '../../utilities/convertHandler';


const converter = Router();



// convert image using filesystem
converter.get('/', async (req: Request, res: Response) => {
  convert.file(res, req);
});

// convert image using pixels ID
converter.post('/:id', async (req: Request, res: Response) => {
  convert.ID(req, res);
});

// convert image using image link
converter.put('/', async (req: Request, res: Response) => {
  convert.link(req, res);
});

export default converter;