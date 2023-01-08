import { Knex } from 'knex';

const tableName = 'permissions';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments().unsigned();
    t.string('action');
    t.integer('objectId').unsigned().notNullable();
    t.foreign('objectId').references('objects.id');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
