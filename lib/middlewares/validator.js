'use strict';

const validator = (reques, response, next) => {
  let { path, method } = reques;
  let { name } = reques.query;
  console.log('REQUEST QUERY NAME: ' + name);
  if (!name) {
    next('500');
  } else if (path !== '/person') {
    next('404');
  } else if (method !== 'GET') {
    next('404');
  } else {
    next();
  }
};

module.exports = validator;
