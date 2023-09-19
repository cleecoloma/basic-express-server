'use strict';

const error404 = (error, request, response, next) => {
  response.status(404).send('404/Not-Found');
};

module.exports = error404;
