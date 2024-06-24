import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.uuid("userId").defaultTo(knex.fn.uuid()).primary();
    table.string("walletAddress").notNullable().unique();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });

  await knex.schema.createTable("projects", (table) => {
    table.uuid("projectId").defaultTo(knex.fn.uuid()).primary();
    table.string("name").nullable();
    table.string("title").nullable();
    table.string("chainId").notNullable();
    table.string("logoUrl").nullable();
    table.string("theme").notNullable();
    table.boolean("useSmartWallet").defaultTo(false);
    table.uuid("userId").references("users.userId");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("projects");
  await knex.schema.dropTable("users");
}
