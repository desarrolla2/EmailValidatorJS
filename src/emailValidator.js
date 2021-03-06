'use strict';

var parser = require('./parser');

function EmailValidator() {
  this.isValid = function (email, strict) {
    try {
      parser.parser.parse(email);
    }
    catch (err) {
      console.log(err);
      return false;
    }

    return true;
  };
}

module.exports = new EmailValidator();
