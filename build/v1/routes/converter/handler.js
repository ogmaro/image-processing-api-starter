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
// Create a pipeline that will download an image, resize it and format it to different files
// Using Promises to know when the pipeline is complete
const promises_1 = __importDefault(require("fs/promises"));
const got_1 = __importDefault(require("got"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const sharpStream = (0, sharp_1.default)({
    failOnError: false
});
const pexels_1 = require("pexels");
const client = (0, pexels_1.createClient)('563492ad6f9170000100000161e6831e962e4bfdaa9633c2b963b22e');
const pathVar2 = path_1.default.resolve(path_1.default.join(__dirname, '../../routes/images/output/fjor_320_240.png'));
const promises = [];
promises.push(sharpStream
    .clone()
    .jpeg({ quality: 100 })
    .toFile(pathVar2));
function url() {
    return __awaiter(this, void 0, void 0, function* () {
        const rec = yield client.photos.show({ id: 2014422 });
        const fileurl = rec;
        return fileurl.url;
    });
}
const url_l = url();
const newurl = url_l;
// https://github.com/sindresorhus/got#gotstreamurl-options
got_1.default.stream(newurl).pipe(sharpStream);
Promise.all(promises)
    .then(res => { console.log('Done!', res); })
    .catch(err => {
    console.error('Error processing files, let"s clean it up', err);
    try {
        promises_1.default.unlink(pathVar2);
    }
    catch (e) {
        console.log(e);
    }
});
