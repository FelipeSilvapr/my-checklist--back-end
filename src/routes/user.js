const express = require('express');
const passport = require('passport');

const { createNewUser, authentication } = require('../controllers/user');

const router = express.Router();
router.post('/create-new-user', createNewUser);
router.post('/local-strategy', authentication, passport.authenticate('local', {
  failureRedirect: '/wrong',
  successRedirect: '/right',
  session: false,
}));

module.exports = router;
