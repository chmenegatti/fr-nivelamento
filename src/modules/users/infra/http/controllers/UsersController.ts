import CreateUsersService from '@modules/users/services/CreateUsersService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, tipo_id } = request.body;

    const createUser = container.resolve(CreateUsersService);

    const newUser = await createUser.execute({
      name,
      email,
      password,
      tipo_id,
    });

    return response.json(classToClass(newUser));
  }
}
