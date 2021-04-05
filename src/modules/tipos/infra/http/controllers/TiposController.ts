import CreateTiposService from '@modules/tipos/services/CreateTiposService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class TipoController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { tipo } = request.body;

    const createTipo = container.resolve(CreateTiposService);

    const newTipo = await createTipo.execute(tipo);

    return response.json(classToClass(newTipo));
  }
}
