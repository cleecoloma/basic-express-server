const supertest = require('supertest');
const app = require('../lib/server.js');
const request = supertest(app);

describe('Testing the server module', () => {
  test('Should return ab object as a response', async () => {
    let response = await request.get('/person?name=Chester');

    expect(response.status).toEqual(200);
    expect(response.data.name).toEqual('Chester');
  });
});
