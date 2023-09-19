const logger = require('./logger.js');

describe('Testing the logger module', () => {
  test('Gets information about the request path & method and calls the next function', () => {
    console.log = jest.fn();
    const request = {
      method: 'TEST',
      path: 'TEST',
    };
    const response = {};
    const next = jest.fn();

    logger(request, response, next);

    expect(console.log).toHaveBeenCalledWith('REQUEST METHOD: TEST');
    expect(console.log).toHaveBeenCalledWith('REQUEST PATH: TEST');
    expect(next).toHaveBeenCalled();
  });
});
