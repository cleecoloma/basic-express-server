'use strict';

const error500 = (error, request, response, next) => {
  response.status(500).send('500/Server Error');
};

module.exports = error500;
