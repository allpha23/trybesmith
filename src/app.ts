import express from 'express';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import orderController from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderController);

export default app;
