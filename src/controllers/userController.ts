import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import productCreate from '../services/userService';
import jwtGenerator from '../helpers/jwtGenerator';

async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await productCreate(user);
  
  delete data.password;
  const token = jwtGenerator(data);
  res.status(status).json({ token });
}

export default create;