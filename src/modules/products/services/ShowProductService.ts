import { inject, injectable } from 'tsyringe';
import Products from '../infra/typeorm/entities/Products';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class ShowProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ id }): Promise<Products> {
    const getProducts = await this.productsRepository.findById(id);

    return getProducts;
  }
}
