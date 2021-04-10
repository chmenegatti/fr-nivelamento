import ensureAuthenticated from '@modules/users/infra/middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      brand: Joi.string().required(),
      category: Joi.string().required(),
      quantity: Joi.number().required(),
      active: Joi.boolean().required(),
    },
  }),
  productsController.create,
);
productsRoutes.get('/', productsController.index);
productsRoutes.get('/:id', productsController.show);
productsRoutes.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      brand: Joi.string().required(),
      category: Joi.string().required(),
      quantity: Joi.number().required(),
      active: Joi.boolean().required(),
    },
  }),
  productsController.update,
);
productsRoutes.delete('/:id', productsController.delete);

export default productsRoutes;
