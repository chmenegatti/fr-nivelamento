import { inject, injectable } from 'tsyringe';

import Categories from '@modules/categories/infra/typeorm/entities/Categories';

import IProductsRepository from '../repositories/IProductsRepository';
import Products from '../infra/typeorm/entities/Products';

interface IRequest {
  description: string;
  brand: string;
  quantity: number;
  category: Categories;
  active: boolean;
}

@injectable()
export default class CreateProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    description,
    brand,
    quantity,
    category,
    active,
  }: IRequest): Promise<Products> {
    const newProduct = await this.productsRepository.create({
      description,
      brand,
      quantity,
      category,
      active,
    });

    return newProduct;
  }
}
