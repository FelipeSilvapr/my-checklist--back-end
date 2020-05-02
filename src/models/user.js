const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: { type: String, required: true },
  hash: { type: String, required: true },
  email: { type: String, required: true },
  checklist: { type: [] },
});

// eslint-disable-next-line func-names
userSchema.methods.verifyPassword = function (password) {
  bcrypt.compare(password, this.hash, (error, result) => {
    if (error) return error;
    return result;
  });
};

const user = model('User', userSchema);

module.exports = user;
