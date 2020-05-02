const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = {
  createNewUser: (request, response) => {
    const { email, name, password } = request.body;

    // eslint-disable-next-line consistent-return
    bcrypt.hash(password, 10, (error, hash) => {
      if (error) {
        return response.sendStatus(500);
      }

      const user = new User({
        email,
        name,
        hash,
      });

      user.save((mongoError) => {
        if (mongoError) {
          return response.sendStatus(500);
        }

        return response.sendStatus(201);
      });
    });
  },
};
