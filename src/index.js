const express = require('express');

const dbConnection = require('./settings/db-connection');
const userRouter = require('./routes/user');

dbConnection.on('error', console.error.bind(console, 'connection error: '));
dbConnection.once('open', () => console.log('successfully connected'));

const application = express();

application.use(express.json());
application.use('/login', userRouter);

application.listen(8000 || process.env.EXPRESS_LISTEN_PORT);
