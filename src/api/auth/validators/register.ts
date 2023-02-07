import { checkSchema } from 'express-validator';

const registerValidator = checkSchema({
  email: {
    isEmail: true,
    trim: true,
    escape: true,
    errorMessage: 'Email is invalid',
  },
  password: {
    isLength: {
      options: { min: 6 },
    },
    errorMessage: 'Password must be at least 6 characters long',
  },
  firstName: {
    isLength: {
      options: { min: 2 },
    },
    errorMessage: 'First name must be at least 2 characters long',
  },
  lastName: {
    isLength: {
      options: { min: 2 },
    },
    errorMessage: 'Last name must be at least 2 characters long',
  },
});

export default registerValidator;
