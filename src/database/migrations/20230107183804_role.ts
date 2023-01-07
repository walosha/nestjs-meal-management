import { Knex } from 'knex';

const tableName = 'roles';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments('id').primary();
    t.string('name');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
