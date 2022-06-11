import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProduct, Product } from '../interfaces';

export async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);

  return products as Product[];
}

export async function getById(id: number): Promise<Product> {
  const query = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?';
  const values = [id];
  const [products] = await connection.execute(query, values);
  const [product] = products as Product[];

  return product || null;
}

export async function create(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { id, name, amount };
  return newProduct;
}