import { Knex } from 'knex';

const tableName = 'objects';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments().unsigned();
    t.string('name');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
