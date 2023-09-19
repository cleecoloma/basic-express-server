'use strict';

const error404 = (error, request, response) => {
  response.status(error).send('404/Not-Found');
};

module.exports = error404;
