import { Request, Response, Router } from 'express';
import convert from '../../utilities/sharpHandler';


const converter = Router();



// convert image using filesystem
converter.get('/', async (req: Request, res: Response) => {
  convert.file(req, res);
});

// convert image using pixels ID
converter.post('/:id', async (req: Request, res: Response) => {
  convert.ID(req, res);
});

// convert image using image link
converter.get('/link', async (req: Request, res: Response) => {
  convert.link(req, res);
});

export default converter;