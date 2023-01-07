import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AddonsModule } from './addons/addons.module';
import { BrandsModule } from './brands/brands.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import validateEnv from './config/env';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    AddonsModule,
    BrandsModule,
    AuthModule,
  ],
  providers: [AuthService, JwtService],
})
export class AppModule {}
