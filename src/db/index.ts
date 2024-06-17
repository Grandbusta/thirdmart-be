import knex from "knex";
import type { Knex } from "knex";

import dotenv from 'dotenv'
dotenv.config()

const defaultDatabaseUrl="postgresql://busta:busta@localhost:5432/thirdmart"

const config: Knex.Config = {
  client: "pg",
  connection: process.env.DATABASE_URL??defaultDatabaseUrl,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

export const db=knex(config)

export const testDbConnection = async () => {
    try {
      await db.raw("SELECT 1");
      console.log("Database connected")
    //   logger.info("Databse Connected succesfully");
    } catch (error) {
      console.log("PostgreSQL not connected",error);
    //   logger.error("Error while connecting to Database");
    }
};

export default config