import { getRepository, Repository } from 'typeorm';

import Tipos from '../entities/Tipos';

import ITiposRepository from '@modules/tipos/repositories/ITiposRepository';
import ICreateTiposDTO from '@modules/tipos/dtos/ICreateTiposDTO';

export default class TiposRepository implements ITiposRepository {
  private ormRepository: Repository<Tipos>;

  constructor() {
    this.ormRepository = getRepository(Tipos);
  }

  public async create(tiposData: ICreateTiposDTO): Promise<Tipos> {
    const newtipo = this.ormRepository.create(tiposData);

    await this.ormRepository.save(newtipo);

    return newtipo;
  }

  public async save(tipo: Tipos): Promise<Tipos> {
    return this.ormRepository.save(tipo);
  }
}
