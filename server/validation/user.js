const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateUserInput = (data) => {
  let errors = {};

  data.displayName = !isEmpty(data.displayName) ? data.displayName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';  

  if (!Validator.isLength(data.displayName, { min: 2, max: 20 })) {
    errors.displayName = 'Name must be between 2 and 20 characters';
  }

  if (Validator.isEmpty(data.displayName)) {
    errors.displayName = 'Display Name field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};