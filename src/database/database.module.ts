import { ObjectionModule } from '@willsoto/nestjs-objection';
import { Global, Module } from '@nestjs/common';
import { knexSnakeCaseMappers } from 'objection';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BaseModel } from './base.model';
import { User } from '../users/models/users.model';
import { Addon } from '../addons/addons.model';
import { Brand } from '../brands/brands.model';
import { Objects } from 'src/users/models/objects.model ';
import { Role_permission } from 'src/users/models/role_permissions.model';
import { Permission_ } from 'src/users/models/permissions.model';
import { Role } from 'src/users/models/roles.model';

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
    ObjectionModule.forFeature([
      User,
      Addon,
      Brand,
      Permission_,
      Objects,
      Role_permission,
      Role,
    ]),
  ],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
