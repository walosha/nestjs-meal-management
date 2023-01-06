import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Addon } from './addons.model';

@Injectable()
export class AddonsService {
  constructor(@Inject(Addon) private readonly addonModel: typeof Addon) {}

  async create(brand: Addon): Promise<Addon> {
    return await this.addonModel.query().insertAndFetch(brand);
  }

  async findOne(id: number) {
    const addon = await this.addonModel.query().findById(id);

    if (!addon) {
      throw new HttpException(
        `Addon with id: ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return addon;
  }

  findAll(): Observable<Addon[]> {
    return from(this.addonModel.query());
  }

  update() {}

  async remove(id: number) {
    const addon = await this.addonModel.query().findById(id);

    if (!addon) {
      throw new HttpException(
        `Addon with id: ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
