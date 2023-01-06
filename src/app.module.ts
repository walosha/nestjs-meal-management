import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AddonsModule } from './addons/addons.module';
import { BrandsModule } from './brands/brands.module';
import validateEnv from './config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
    }),
    DatabaseModule,
    UsersModule,
    AddonsModule,
    BrandsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
