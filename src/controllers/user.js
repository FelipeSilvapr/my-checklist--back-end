const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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

  authentication: (_request, _response, next) => {
    passport.use(new LocalStrategy({
      usernameField: 'email',
    }, (email, password, done) => {
      User.findOne({ email }, (error, user) => {
        if (error) return done(error);
        if (user !== null) {
          const situation = user.verifyPassword(password);
          if (situation) {
            return done(null, user);
          }
          return done(null, false);
        }
        return done(null, false);
      });
    }));

    next();
  },
};
