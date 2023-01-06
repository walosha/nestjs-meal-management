import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Brand } from './brands.model';

@Injectable()
export class BrandsService {
  constructor(@Inject(Brand) private readonly brandModel: typeof Brand) {}

  async create(brand: Brand): Promise<Brand> {
    return await this.brandModel.query().insertAndFetch(brand);
  }

  findOne() {}

  findAll(): Observable<Brand[]> {
    return from(this.brandModel.query());
  }

  update() {}

  remove() {}
}
