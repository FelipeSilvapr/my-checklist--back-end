const { connect, connection } = require('mongoose');

connect(
  `mongodb+srv://${process.env.MONGOOSE_API_USER}:${process.env.MONGOOSE_API_PASSWORD}@cluster0-e6eph.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const dbConnection = connection;

module.exports = dbConnection;
