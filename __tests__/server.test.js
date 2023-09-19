const supertest = require('supertest');
const app = require('../lib/server.js');
const request = supertest(app);

describe('Testing the server module', () => {
  test('Should return an object as a response', async () => {
    let response = await request.get('/person?name=Chester');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chester');
  });
});
