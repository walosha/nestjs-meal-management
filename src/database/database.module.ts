import { ObjectionModule } from '@willsoto/nestjs-objection';
import { Global, Module } from '@nestjs/common';
import { knexSnakeCaseMappers } from 'objection';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BaseModel } from './base.model';
import { User } from '../users/users.model';

@Global()
@Module({
  imports: [
    ObjectionModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          Model: BaseModel,
          config: {
            client: 'pg',
            connection: {
              host: configService.get('DATABASE_URL'),
              port: +configService.get('DATABASE_PORT'),
              user: configService.get('DATABASE_USER'),
              password: configService.get('DATABASE_PASSWORD'),
              database: configService.get('DATABASE_USER'),
            },
            ...knexSnakeCaseMappers(),
          },
        };
      },
    }),
    ObjectionModule.forFeature([User]),
  ],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
