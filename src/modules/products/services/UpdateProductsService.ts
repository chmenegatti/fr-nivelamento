import { inject, injectable } from 'tsyringe';

import Categories from '@modules/categories/infra/typeorm/entities/Categories';

import IProductsRepository from '../repositories/IProductsRepository';
import Products from '../infra/typeorm/entities/Products';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  description: string;
  brand: string;
  quantity: number;
  category: Categories;
  active: boolean;
}

@injectable()
export default class UpdateProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    id,
    active,
    category,
    brand,
    description,
    quantity,
  }: IRequest): Promise<Products> {
    const getProducts = await this.productsRepository.findById(id);

    if (!getProducts) {
      throw new AppError('Product not found', 401);
    }

    const updatedProducts = Object.assign(getProducts, {
      active,
      category,
      brand,
      description,
      quantity,
    });

    await this.productsRepository.update(updatedProducts);

    return updatedProducts;
  }
}
