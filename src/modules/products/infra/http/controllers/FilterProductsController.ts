import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SearchByCategoryService from '@modules/products/services/SearchByCategoryService';
import { classToClass } from 'class-transformer';

export default class FilterProductsController {
  public async filterCategories(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { category_id } = request.params;

    const searchByCategoryService = container.resolve(SearchByCategoryService);

    const getFilteredProducts = await searchByCategoryService.execute(
      category_id,
    );

    return response.json(classToClass(getFilteredProducts));
  }
}
