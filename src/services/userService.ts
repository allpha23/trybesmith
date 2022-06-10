import { IUser } from '../interfaces';
import userCreate from '../models/userModel';

async function create(user:IUser) {
  const data = await userCreate(user);
  return { status: 201, data };
}

export default create;