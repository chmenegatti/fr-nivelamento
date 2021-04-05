import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  id: string;
  privilege: string;
}

@injectable()
export default class DeleteProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id, privilege }: IRequest): Promise<number> {
    const { tipo } = await this.usersRepository.getPrevilege(privilege);

    const getProdutc = await this.productsRepository.findById(id);

    if (!getProdutc) {
      throw new AppError(
        'The product already been deleted or does not exist!',
        401,
      );
    }

    if (tipo.tipo === 'Comum') {
      throw new AppError('You not have permission to delete this product', 401);
    }
    const deleteProduct = await this.productsRepository.delete(id);

    return deleteProduct;
  }
}
