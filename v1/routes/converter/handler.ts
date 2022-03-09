// Create a pipeline that will download an image, resize it and format it to different files
// Using Promises to know when the pipeline is complete
import fs from 'fs/promises';
import got from 'got';
import sharp from 'sharp';
import path from 'path';
import { RestP } from '../../utilities/utile';
const sharpStream = sharp({
    failOnError: false
});
import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000161e6831e962e4bfdaa9633c2b963b22e');


const pathVar2 = path.resolve(
    path.join(__dirname, '../../routes/images/output/fjor_320_240.png')
);


const promises = [];

promises.push(
    sharpStream
        .clone()
        .jpeg({ quality: 100 })
        .toFile(pathVar2)
);

async function url() {
    const rec = await client.photos.show({ id: 2014422 });
    const fileurl: RestP = rec as unknown as object;
    return fileurl.src?.original;
}

const url_l = url();
const newurl = url_l as unknown as string;
// https://github.com/sindresorhus/got#gotstreamurl-options
got.stream(newurl).pipe(sharpStream);

Promise.all(promises)
    .then(res => { console.log('Done!', res); })
    .catch(err => {
        console.error('Error processing files, let"s clean it up', err);
        try {
            fs.unlink(pathVar2);
        } catch (e) {
            console.log(e);
        }
    });

    