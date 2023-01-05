import { ObjectionModule } from '@willsoto/nestjs-objection';
import { Global, Module } from '@nestjs/common';
import { knexSnakeCaseMappers } from 'objection';
import { BaseModel } from './base.model';
import { User } from '../users/users.model';

@Global()
@Module({
  imports: [
    ObjectionModule.register({
      Model: BaseModel,
      config: {
        client: 'pg',
        connection: {
          host: process.env.DATABASE_URL,
          port: +process.env.DATABASE_PORT,
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_USER,
        },
        ...knexSnakeCaseMappers(),
      },
    }),
    ObjectionModule.forFeature([User]),
  ],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
