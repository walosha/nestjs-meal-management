import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController]
})
export class BrandsModule {}
