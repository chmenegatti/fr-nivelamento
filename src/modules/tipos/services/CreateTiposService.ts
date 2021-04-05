import { inject, injectable } from 'tsyringe';
import Tipos from '../infra/typeorm/entities/Tipos';
import ITiposRepository from '../repositories/ITiposRepository';

@injectable()
export default class CreateTiposService {
  constructor(
    @inject('TiposRepository')
    private tiposRepository: ITiposRepository,
  ) {}

  public async execute(tipo: string): Promise<Tipos> {
    const newTipo = await this.tiposRepository.create({ tipo });

    return newTipo;
  }
}
