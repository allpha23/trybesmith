import jwt = require('jsonwebtoken');
import dotenv from 'dotenv';

dotenv.config();

const jwtConfig = {
  expiresIn: '15d',
};

const SECRET = process.env.JWT_SECRET || '';

export = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);