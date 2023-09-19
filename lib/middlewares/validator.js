'use strict';

const validator = (request, response, next) => {
  let { name } = request.query;
  console.log('REQUEST QUERY NAME: ' + name);
  if (!name) {
    next('500');
  } else {
    next();
  }
};

module.exports = validator;
