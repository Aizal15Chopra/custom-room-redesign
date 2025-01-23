import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	name: varchar().notNull(),
	email: varchar().notNull(),
	imageUrl: varchar().notNull(),
	credits: integer().default(3),
});
