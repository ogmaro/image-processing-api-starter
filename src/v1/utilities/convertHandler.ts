import sharp from 'sharp';
import utile from './utileHandeler';
import got from 'got';
import fs from 'fs';
import { Request, Response } from 'express';
import data from './pexelsHandler';
import sharpconverter from '../middleware/sharp.middleware';
const sharpStream = sharp({
    failOnError: false
});

const convert = {
    ID: async (req: Request, res: Response) => {
        const getnum = Number(utile.ConvertToNumber(req.params.id));

        const ID = getnum !== 320.001 ? getnum : 2014429;

        const url_link = await data.url(ID) as unknown as string;
        const title = utile.nameGenerator();


        const pathVarOut = utile.filePathOutput(title, 'jpeg');

        const promises = [];
        promises.push(
            sharpStream
                .clone()
                .resize(
                    utile.ConvertToNumber(Number(req.query.width)),
                    utile.ConvertToNumber(Number(req.query.height))
                )
                .jpeg({ quality: utile.ConvertToNumber(Number(req.query.width)) })
                .toFile(pathVarOut)
        );
        got.stream(url_link).pipe(sharpStream);

        Promise.all(promises)
            .then(response => {
                res.status(201);
                res.send(response);
            })
            .catch(err => {
                res.status(501);
                res.send('Error processing files, let"s clean it up');
                console.log(err);
                try {
                    fs.unlinkSync(pathVarOut);
                } catch (e) {
                    res.status(501);
                    console.log(e);
                }
            });
    },
    link: async (req: Request, res: Response) => {
        const title = utile.nameGenerator();
        const pathVarOut = utile.filePathOutput(title, 'jpeg');

        const link = req.query.link as string;

        const promises = [];
        promises.push(
            sharpStream
                .clone()
                .resize(
                    utile.ConvertToNumber(Number(req.query.width)),
                    utile.ConvertToNumber(Number(req.query.height))
                )
                .jpeg({ quality: 100 })
                .toFile(pathVarOut)
        );

        got.stream(link).pipe(sharpStream);

        Promise.all(promises)
            .then(response => {
                res.status(201);
                res.send(response);
            })
            .catch(err => {
                res.status(501);
                res.send(err);
                console.log(err);
                try {
                    fs.unlinkSync(pathVarOut);
                } catch (e) {
                    res.status(501);
                    console.log(e);
                }
            });
    },
    file: async (res: Response, req?: Request) => {
        const pathVarIn = utile.filePathInput(req?.body.name, req?.body.type);
        const pathVarOut = utile.filePathOutput(req?.body.name, req?.body.type);
        try {
            const file = fs.readFileSync(pathVarIn);
            try {
                const response = await sharpconverter(file, pathVarOut, req);
                res.status(200);
                res.send(response);
            } catch (error) {
                res.status(501);
                console.log(error);
            }
        } catch (error) {
            res.status(404);
            res.send({ status: 'unsuccessful', message: 'file path not found' });
        }
    }
};

export default convert;