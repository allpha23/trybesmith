import { Request, Response } from 'express';
import orderGetAll from '../services/orderService';

async function getAll(req: Request, res: Response) {
  const { status, orderProduct } = await orderGetAll();
  res.status(status).json(orderProduct);
}

export default getAll;