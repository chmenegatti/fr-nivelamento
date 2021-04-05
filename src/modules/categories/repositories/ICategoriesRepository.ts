import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import Categories from '../infra/typeorm/entities/Categories';

export default interface ICategoriesRepository {
  create(categoryDate: ICreateCategoryDTO): Promise<Categories>;

  index(): Promise<Categories[]>;

  findById(id: string): Promise<Categories | undefined>;
}
