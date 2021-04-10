import ICreateTiposDTO from '../dtos/ICreateTiposDTO';
import Tipos from '../infra/typeorm/entities/Tipos';

export default interface ITiposRepository {
  create(tipoData: ICreateTiposDTO): Promise<Tipos>;

  save(tipo: Tipos): Promise<Tipos>;

  index(): Promise<Tipos[]>;
}
