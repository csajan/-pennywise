import dotenv from "dotenv";
dotenv.config();

export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    // url: "postgresql://pennywisedb_owner:1LeMSnqZoEb7@ep-twilight-feather-a5rfpotf.us-east-2.aws.neon.tech/pennywisedb?sslmode=require",
  },
};
