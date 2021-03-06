/* eslint-disable no-console */
const express = require('express');
const passport = require('passport');

const dbConnection = require('./settings/db-connection');
const userRouter = require('./routes/user');

dbConnection.on('error', console.error.bind(console, 'connection error: '));
dbConnection.once('open', () => console.log('successfully connected'));

const application = express();

application.use(express.json());
application.use(passport.initialize());
application.use('/login', userRouter);

application.listen(8000 || process.env.EXPRESS_LISTEN_PORT);
