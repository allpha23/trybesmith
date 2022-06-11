import orderGetAll from '../models/orderModel';
import * as productModel from '../models/productModel';

async function getAll() {
  const orders = await orderGetAll();

  const promisesArray = await Promise.all(
    orders.map(async (order) => {
      const product = await productModel.getById(order.id);
      return { ...order, productsIds: [product.id] };
    }),
  );
  
  const orderProduct = promisesArray;
  return { status: 200, orderProduct };
}

export default getAll;