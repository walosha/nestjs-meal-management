import { Controller, Get, Post, Body } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand } from './brands.model';
@Controller('users')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  brand() {
    return this.brandsService.findAll();
  }

  @Post()
  createBrand(@Body() user: Brand) {
    return this.brandsService.create(user);
  }
}
