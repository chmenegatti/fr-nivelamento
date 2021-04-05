import Users from '../infra/typeorm/entities/Users';
import ICreateUserDto from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  findByEmail(email: string): Promise<Users | undefined>;

  create(userData: ICreateUserDto): Promise<Users>;

  save(user: Users): Promise<Users>;

  getPrevilege(id: string): Promise<Users | undefined>;
}
