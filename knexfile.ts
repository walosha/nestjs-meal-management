import type { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import 'dotenv/config';

// Update with your config settings.
const options: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_URL,
      port: +process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_USER,
    },
    migrations: {
      directory: './src/database/migrations',
      stub: './src/database/migration.stub',
    },
    seeds: {
      directory: './src/database/seeds',
      stub: './src/database/seed.stub',
    },
    ...knexSnakeCaseMappers(),
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = config;
