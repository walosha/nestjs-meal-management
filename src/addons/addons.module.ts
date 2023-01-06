import { Module } from '@nestjs/common';
import { AddonsService } from './addons.service';
import { AddonsController, BrandAddonsController } from './addons.controller';

@Module({
  providers: [AddonsService],
  controllers: [AddonsController, BrandAddonsController],
})
export class AddonsModule {}
