import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("projects", (table) => {
    table.string("description").nullable();
    table.jsonb("properties").defaultTo("{}");
  });
}

export async function down(knex: Knex): Promise<void> {}
