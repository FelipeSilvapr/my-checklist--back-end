const express = require('express');

const application = express();

application.get('/', (_request, response) => {
  response.send('ok');
});

application.listen(8000 || process.env.EXPRESS_LISTEN_PORT);
