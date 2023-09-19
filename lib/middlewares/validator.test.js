const validator = require('./validator.js');

describe('Testing the validator module', () => {
  test('Gets information about the request query with property called name', () => {
    console.log = jest.fn();
    const request = {
      query: {
      name: 'TEST',
    }};
    const response = {};
    const next = jest.fn();

    validator(request, response, next);

    expect(console.log).toHaveBeenCalledWith('REQUEST QUERY NAME: TEST');
    expect(next).toHaveBeenCalled();
  });
});
