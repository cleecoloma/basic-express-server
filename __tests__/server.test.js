const supertest = require('supertest');
const server = require('../lib/server.js');
const request = supertest(server.app);

describe('Testing the server module', () => {
  test('Should return value of key name as a response', async () => {
    let response = await request.get('/person?name=Chester');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chester');
  });
});
