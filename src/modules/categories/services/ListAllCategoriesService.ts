import { inject, injectable } from 'tsyringe';
import Categories from '../infra/typeorm/entities/Categories';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

@injectable()
export default class CreateCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(): Promise<Categories[]> {
    return this.categoriesRepository.index();
  }
}
