import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import Users from '../entities/Users';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async create(userData: ICreateUserDTO): Promise<Users> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: Users): Promise<Users> {
    return this.ormRepository.save(user);
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async getPrevilege(previlege: string): Promise<Users | undefined> {
    const getUserPrevilege = await this.ormRepository.findOne({
      relations: ['tipo'],
      where: { id: previlege },
    });

    return getUserPrevilege;
  }
}

export default UsersRepository;
