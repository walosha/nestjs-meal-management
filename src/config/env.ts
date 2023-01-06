import { registerAs } from '@nestjs/config';
import 'dotenv/config';

export default registerAs('jwt', () => ({
  host: process.env.DATABASE_URL,
  port: +process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_USER,
  KNEX_DEBUG: true,
}));
