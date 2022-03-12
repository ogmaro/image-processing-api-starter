// import request from 'supertest';
// import app from '../../app';



// describe('ID IndexController', () => {
//   let originalTimeout: number;

//   beforeAll(() => {
//     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
//   });

//   afterAll(() => {
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//   });

//   it('Request /v1/converter should return status 200', async () => {
//     const result = await request(app).get('/v1/converter');
//     console.log(result.status);
//     expect(result.status).toBe(200);
//   });

//   it('Request /v1/converter/2014193 should return status 200', async () => {
//     const result = await request(app).post('/v1/converter/2014193');
//     console.log(result.status);
//     expect(result.status).toBe(200);
//   });

//   it('Request /v1/converter should return status 200', async () => {
//     const result = await request(app).get('/v1/converter/link/?link=https://images.pexels.com/photos/10064636/pexels-photo-10064636.jpeg');
//     console.log(result.status);
//     expect(result.status).toBe(200);
//   });
// });

// describe('Not found routes', () => {


//   it('Request /v1/converte should return status 404', async () => {
//     const result = await request(app).get('/v1/converte');
//     console.log(result.status);
//     expect(result.status).toBe(404);
//   });

//   it('Request /v1/converter2014193 should return status 404', async () => {
//     const result = await request(app).post('/v1/converter2014193');
//     console.log(result.status);
//     expect(result.status).toBe(404);
//   });

//   it('Request /v1/converter/link/link={link} should return status 404', async () => {
//     const result = await request(app).get('/v1/converter/link/link=https://images.pexels.com/photos/10064636/pexels-photo-10064636.jpeg');
//     console.log(result.status);
//     expect(result.status).toBe(404);
//   });
// });
