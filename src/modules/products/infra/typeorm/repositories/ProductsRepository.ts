import { getRepository, Repository } from 'typeorm';

import ICreateProductsDTO from '@modules/products/dtos/ICreateProductsDTO';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

import Products from '../entities/Products';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Products>;
  constructor() {
    this.ormRepository = getRepository(Products);
  }

  public async create(productsData: ICreateProductsDTO): Promise<Products> {
    const newProduct = this.ormRepository.create(productsData);

    await this.ormRepository.save(newProduct);

    return newProduct;
  }

  public async index(): Promise<Products[]> {
    const listAllProducts = await this.ormRepository.find({
      order: { description: 'ASC' },
    });

    return listAllProducts;
  }

  public async findById(id: string): Promise<Products> {
    const product = await this.ormRepository.findOne(id);
    return product;
  }

  public async findByCategory(category: string): Promise<Products[]> {
    const getProducts = this.ormRepository.find({
      relations: ['category'],
      where: { category: `${category}` },
      order: { description: 'ASC' },
    });

    return getProducts;
  }

  public async update(product: Products): Promise<Products> {
    return this.ormRepository.save(product);
  }

  public async delete(id: string): Promise<number> {
    return (await this.ormRepository.delete(id)).affected;
  }
}

export default ProductsRepository;
