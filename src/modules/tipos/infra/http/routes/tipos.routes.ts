import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TiposController from '../controllers/TiposController';

const tiposRouter = Router();

const tiposController = new TiposController();

tiposRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      tipo: Joi.string().required(),
    },
  }),
  tiposController.create,
);

export default tiposRouter;
