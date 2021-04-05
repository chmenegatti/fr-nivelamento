import { inject, injectable } from 'tsyringe';
import Categories from '../infra/typeorm/entities/Categories';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

interface IRequest {
  category: string;
}

@injectable()
export default class CreateCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(category: IRequest): Promise<Categories> {
    const newCategory = await this.categoriesRepository.create(category);

    return newCategory;
  }
}
