import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import tiposRouter from '@modules/tipos/infra/http/routes/tipos.routes';
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';
import categoryRoutes from '@modules/categories/infra/http/routes/categories.routes';
import productsRoutes from '@modules/products/infra/http/routes/products.routes';
import filterProductsRoutes from '@modules/products/infra/http/routes/filterProducts.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/tipos', tiposRouter);
routes.use('/session', sessionRouter);
routes.use('/category', categoryRoutes);
routes.use('/products', productsRoutes);
routes.use('/filter', filterProductsRoutes);

export default routes;
