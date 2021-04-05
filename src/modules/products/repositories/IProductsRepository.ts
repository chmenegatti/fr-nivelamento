import ICreateProductsDTO from '../dtos/ICreateProductsDTO';
import Products from '../infra/typeorm/entities/Products';

export default interface IProductsRepository {
  create(productsData: ICreateProductsDTO): Promise<Products>;

  index(): Promise<Products[]>;

  findById(id: string): Promise<Products>;

  findByCategory(category: string): Promise<Products[]>;

  update(product: Products): Promise<Products>;

  delete(id: string): Promise<number>;
}
