import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IUser, User } from '../interfaces';

async function create(user: IUser): Promise<User> {
  const { username, classe, level, password } = user;

  const query = `INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES (?,?,?,?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: User = { id, username, classe, level, password };
  return newUser;
}

export default create;