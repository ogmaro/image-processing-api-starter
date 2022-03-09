import sharp from 'sharp';
import fs from 'fs';
import got from 'got';
// import axios from 'axios';
// import pathdir from '../../../config';
import { Request, Response, Router } from 'express';
import path from 'path';
import ConvertToNumber, { RestP } from '../../utilities/utile';


import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000161e6831e962e4bfdaa9633c2b963b22e');

const pathVar: string = path.resolve(
  path.join(__dirname, '../../routes/images/fjord.jpeg')
);
const pathVar2: string = path.resolve(
  path.join(__dirname, '../../routes/images/output/')
);


const converter = Router();

// convert image using filesystem
converter.get('/', async (req: Request, res: Response) => {
  const file = await fs.readFileSync(pathVar);

  try {
    const response = await sharp(file)
      .png()
      .resize(
        ConvertToNumber(req.query.width as string),
        ConvertToNumber(req.query.height as string)
      )
      .toFile(pathVar2);

    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

converter.post('/:id', async (req, res) => {
  const getnum = Number(ConvertToNumber(req.params.id));

  const ID = getnum !== 320.001 ? getnum : 2014429;

  const sharpStream = sharp({
    failOnError: false
  });
  const promises = [];
  promises.push(
    sharpStream
      .clone()
      .jpeg({ quality: 100 })
      .toFile(`${pathVar2}/${ID}.jpeg`)
  );
  async function url() {
    const rec = await client.photos.show({ id: ID });
    const fileurl: RestP = rec as unknown as object;
    return fileurl.src?.original;
  }

  const url_l = await url() as unknown as string;

  console.log('url', url_l);
  got.stream(url_l).pipe(sharpStream);

  Promise.all(promises)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send('Error processing files, let"s clean it up');
      console.log(err);
      try {
        fs.unlinkSync(`${pathVar2}/${ID}.jpeg`);
      } catch (e) {
        console.log(e);
      }
    });

});
export default converter;
