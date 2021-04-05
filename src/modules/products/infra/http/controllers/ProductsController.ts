import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateProductsService from '@modules/products/services/CreateProductsService';
import DeleteProductsService from '@modules/products/services/DeleteProductsService';
import ListAllProductsSevice from '@modules/products/services/ListAllProductsSevice';
import UpdateProductsService from '@modules/products/services/UpdateProductsService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description, brand, category, quantity, active } = request.body;

    const productsService = container.resolve(CreateProductsService);

    const newProduct = await productsService.execute({
      description,
      brand,
      category,
      quantity,
      active,
    });

    return response.json(classToClass(newProduct));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const productsService = container.resolve(ListAllProductsSevice);

    const getProducts = await productsService.execute();

    return response.json(classToClass(getProducts));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description, brand, category, quantity, active } = request.body;

    const productsService = container.resolve(UpdateProductsService);

    const updatedProduct = await productsService.execute({
      id,
      description,
      brand,
      category,
      quantity,
      active,
    });

    return response.json(classToClass(updatedProduct));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const privilege = request.user.id;

    const productsService = container.resolve(DeleteProductsService);

    const deletedProduct = await productsService.execute({ id, privilege });

    return response.json(deletedProduct);
  }
}
