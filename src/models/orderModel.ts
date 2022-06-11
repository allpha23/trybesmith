import connection from './connection';
import { IOrder } from '../interfaces';

async function getAll(): Promise<IOrder[]> {
  const query = 'SELECT * FROM Trybesmith.Orders;';
  const [orders] = await connection.execute(query);

  return orders as IOrder[];
}

export default getAll;