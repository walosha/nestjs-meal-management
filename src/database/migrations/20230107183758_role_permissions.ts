import { Knex } from 'knex';

const tableName = 'role_permissions';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments();
    t.integer('permissionsId').unsigned().notNullable();
    t.foreign('permissionsId').references('permissions.id');
    t.integer('rolesId').unsigned().notNullable();
    t.foreign('rolesId').references('roles.id');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
