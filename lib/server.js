'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./middlewares/logger.js');
const validator = require('./middlewares/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

app.use(cors());

app.use(logger); // logger middleware
app.use(validator); //validator middleware
app.get('/person', (request, response) => {
  response.status(200).send(`{name: ${request.query.name}}`);
});

// app.use(error500);

// app.use('/*', error404);
app.use((error, request, response, next) => {
  if (error === '404') {
    error404(error, request, response, next);
  } else {
    error500(error, request, response, next);
  }
});

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is running on PORT ::', PORT);
    });
  },
};
