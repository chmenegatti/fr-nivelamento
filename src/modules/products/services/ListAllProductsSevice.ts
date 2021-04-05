import { inject, injectable } from 'tsyringe';
import Products from '../infra/typeorm/entities/Products';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class ListAllProductsSevice {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<Products[]> {
    const getProducts = await this.productsRepository.index();

    return getProducts;
  }
}
