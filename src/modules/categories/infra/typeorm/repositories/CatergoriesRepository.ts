import { getRepository, Repository } from 'typeorm';

import Categories from '../entities/Categories';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO';

export default class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Categories>;

  constructor() {
    this.ormRepository = getRepository(Categories);
  }

  public async findById(id: string): Promise<Categories | undefined> {
    const getById = this.ormRepository.findOne(id);

    return getById;
  }

  public async create(categoriesData: ICreateCategoryDTO): Promise<Categories> {
    const newCategory = this.ormRepository.create(categoriesData);

    await this.ormRepository.save(newCategory);

    return newCategory;
  }

  public async index(): Promise<Categories[]> {
    const listCategories = await this.ormRepository.find({
      order: { category: 'ASC' },
    });

    return listCategories;
  }
}
