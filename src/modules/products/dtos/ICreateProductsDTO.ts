import Categories from '@modules/categories/infra/typeorm/entities/Categories';

export default interface ICreateProductsDTO {
  description: string;
  brand: string;
  quantity: number;
  category: Categories;
  active: boolean;
}
