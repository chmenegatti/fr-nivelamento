import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CategoriesController from '../controllers/CategoriesController';

import ensureAuthenticated from '@modules/users/infra/middlewares/ensureAuthenticated';

const categoryRoutes = Router();

const categoriesController = new CategoriesController();

categoryRoutes.use(ensureAuthenticated);

categoryRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      category: Joi.string().required(),
    },
  }),
  categoriesController.create,
);
categoryRoutes.get('/', categoriesController.index);

export default categoryRoutes;
