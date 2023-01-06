import { Knex } from 'knex';

const tableName = 'addons';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments();
    t.string('name').notNullable();
    t.integer('brandId').notNullable();
    t.string('description');
    t.double('price').notNullable();
    t.string('category').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
