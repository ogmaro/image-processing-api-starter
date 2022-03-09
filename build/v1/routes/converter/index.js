"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const got_1 = __importDefault(require("got"));
// import axios from 'axios';
// import pathdir from '../../../config';
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const utile_1 = __importDefault(require("../../utilities/utile"));
const sharpStream = (0, sharp_1.default)({
    failOnError: false
});
const pexels_1 = require("pexels");
const client = (0, pexels_1.createClient)('563492ad6f9170000100000161e6831e962e4bfdaa9633c2b963b22e');
// const pathVar = path.resolve(
//   path.join(__dirname, '../../routes/images/fjord.jpeg')
// );
const pathVar2 = path_1.default.resolve(path_1.default.join(__dirname, '../../routes/images/output'));
const converter = (0, express_1.Router)();
// // console.log();
// converter.get('/', async (req: Request, res: Response) => {
//   const file = await fs.readFileSync(pathVar);
//   try {
//     const response = await sharp(file)
//       .png()
//       .resize(
//         ConvertToNumber(req.query.width as string),
//         ConvertToNumber(req.query.height as string)
//       )
//       .toFile(pathVar2);
//     res.send(response);
//   } catch (error) {
//     console.log(error);
//   }
// });
// converter.post('/:id', async (req, res, next) => {
//   const getnum = Number(ConvertToNumber(req.params.id));
//   const ID = getnum !== 320.001 ? getnum : 2014422;
//   try {
//     try {
//       const rec = await client.photos.show({ id: ID });
//       const fileurl: RestP = rec as unknown as object;
//       //get the object url to pass into sharp
//       try {
//         const response = await sharp(fileurl.url)
//           .png()
//           .resize(
//             ConvertToNumber(req.query.width as string),
//             ConvertToNumber(req.query.height as string)
//           )
//           .toFile(pathVar2);
//         res.send(response);
//       } catch (error) {
//         res.send(error);
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   }
//   catch (err) {
//     next(err);
//   }
// });
converter.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send(pathVar2);
    const getnum = Number((0, utile_1.default)(req.params.id));
    const promises = [];
    promises.push(sharpStream
        .clone()
        .jpeg({ quality: 100 })
        .toFile(pathVar2));
    function url() {
        return __awaiter(this, void 0, void 0, function* () {
            const rec = yield client.photos.show({ id: getnum });
            const fileurl = rec;
            return fileurl.url;
        });
    }
    const url_l = url();
    got_1.default.stream(url_l).pipe(sharpStream);
    Promise.all(promises)
        .then(response => {
        res.send(response);
        // console.log('Done!', response);
    })
        .catch(err => {
        console.error('Error processing files, let"s clean it up', err);
        try {
            fs_1.default.unlinkSync(pathVar2);
        }
        catch (e) {
            console.log(e);
        }
    });
}));
exports.default = converter;
