import sharpConverter from '../../../src/v1/middleware/sharp.middleware';
import utileHandeler from '../../../src/v1/utilities/utileHandeler';
import fs from 'fs';


fdescribe('Sharp Converter returns an object promise', () => {
    it('Should return and object promise', () => {
        const pathVarIn = utileHandeler.filePathInput('icelandwaterfall', 'jpeg');
        const pathVarOut = utileHandeler.filePathOutput('icelandwaterfall', 'jpeg');
        const file = fs.readFileSync(pathVarIn);
        expect(sharpConverter(file, pathVarOut)).toBeInstanceOf(Object);
    });
    it('Should return and object', async () => {
        const pathVarIn = utileHandeler.filePathInput('icelandwaterfall', 'jpeg');
        const pathVarOut = utileHandeler.filePathOutput('icelandwaterfall', 'jpeg');
        const file = fs.readFileSync(pathVarIn);
        expect(await sharpConverter(file, pathVarOut)).toEqual({
            'message': 'success',
            'status': 200,
            'response': {
                'format': 'jpeg',
                'width': 100,
                'height': 100,
                'channels': 3,
                'premultiplied': false,
                'size': 8280
            }
        });
    });
});