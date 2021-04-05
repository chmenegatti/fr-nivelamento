import CreateCategoriesService from '@modules/categories/services/CreateCategoriesService';
import ListAllCategoriesService from '@modules/categories/services/ListAllCategoriesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { category } = request.body;

    const categoryService = container.resolve(CreateCategoriesService);

    const newCategory = await categoryService.execute({ category });

    return response.json(newCategory);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const categoryService = container.resolve(ListAllCategoriesService);

    const listAll = await categoryService.execute();

    return response.json(listAll);
  }
}
