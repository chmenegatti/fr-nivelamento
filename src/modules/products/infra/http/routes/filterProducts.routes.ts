import ensureAuthenticated from '@modules/users/infra/middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import FilterProductsController from '../controllers/FilterProductsController';

const filterProductsRoutes = Router();

const filterProductsController = new FilterProductsController();

filterProductsRoutes.use(ensureAuthenticated);

filterProductsRoutes.get(
  '/:category_id',
  filterProductsController.filterCategories,
);

export default filterProductsRoutes;
