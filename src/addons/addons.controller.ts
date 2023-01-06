import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { AddonsService } from './addons.service';
import { Addon } from './addons.model';
@Controller('addons')
export class AddonsController {
  constructor(private brandsService: AddonsService) {}

  @Get()
  addons() {
    return this.brandsService.findAll();
  }

  @Post()
  createBrad(@Body() user: Addon) {
    return this.brandsService.create(user);
  }
}

@Controller('brands/:brandId/addons')
export class BrandAddonsController {
  constructor(private brandsService: AddonsService) {}

  @Get()
  addons() {
    return this.brandsService.findAll();
  }

  @Get(':addonId')
  oneAddons(@Param('addonId', ParseIntPipe) addonId: number) {
    return this.brandsService.findOne(addonId);
  }

  @Post()
  createBrand(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() addon: any,
  ) {
    return this.brandsService.create({ ...addon, brandId });
  }

  @Delete()
  deleteAddon(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.remove(brandId);
  }
}
