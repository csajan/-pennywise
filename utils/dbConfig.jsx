import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// const sql = neon(
//   "postgresql://pennywisedb_owner:1LeMSnqZoEb7@ep-twilight-feather-a5rfpotf.us-east-2.aws.neon.tech/pennywisedb?sslmode=require"
// );

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

export const db = drizzle(sql, { schema });
