import { inject, injectable } from 'tsyringe';
import Products from '../infra/typeorm/entities/Products';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class SearchByCategoryService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(category: string): Promise<Products[]> {
    const getProducts = await this.productsRepository.findByCategory(category);

    return getProducts;
  }
}
