import { Router } from 'express';
import * as productController from '../controllers/productController';
import productMiddleware from '../middlewares/productMiddleware';

const router = Router();

router.get('/', productController.getAll);
router.post('/', productMiddleware, productController.create);

export default router;