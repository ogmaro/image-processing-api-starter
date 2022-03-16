import data from '../../../src/v1/utilities/pexelsHandler';

fdescribe('Data returns a string', () => {
    let originalTimeout: number;

    beforeAll(() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    afterAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it('should return a string constaining a url', async () => {
        const response = await data.url(2014429);
        console.log('url',response);
        expect(response).toBeInstanceOf(String);
    });
});