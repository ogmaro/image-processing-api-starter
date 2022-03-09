import request from 'supertest';
import app from '../app';

describe('Test IndexController', () => {
  it('Request /v1/converter should return status 200', async () => {
    const result = await request(app).get('/v1/converter');
    console.log(result.status);
    expect(result.status).toBe(200);
  });
});
