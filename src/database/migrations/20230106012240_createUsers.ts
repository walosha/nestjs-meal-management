import { Knex } from 'knex';

const tableName = 'users';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets auto-incremented
    t.increments();

    t.string('email').notNullable().unique();
    t.string('first_name').notNullable();
    t.string('last_name').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
