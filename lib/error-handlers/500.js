'use strict';

const error500 = (error, request, response) => {
  response.status(error).send('500/Server Error');
};

module.exports = error500;
