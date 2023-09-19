'use strict';

const logger = (request, response, next) => {
  console.log('REQUEST METHOD: ' + request.method);
  console.log('REQUEST PATH: ' + request.path);
  next();
};

module.exports = logger;
