/* eslint-env mocha */
const { expect } = require('chai');

const User = require('./user');

describe('user model', () => {
  it('returns null to non existent users', () => {
    // eslint-disable-next-line consistent-return
    User.findOne({ name: 'thor odinson' }, (error, result) => {
      if (error) return error;

      expect(result).to.be.null();
    });
  });
});
