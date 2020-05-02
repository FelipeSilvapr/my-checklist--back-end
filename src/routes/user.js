const express = require('express');

const { createNewUser } = require('../controllers/user');

const router = express.Router();
router.post('/create-new-user', createNewUser);

module.exports = router;
