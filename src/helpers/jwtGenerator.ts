import jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '15d',
};

const SECRET = 'batman';

export = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);