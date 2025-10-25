import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("❌ DATABASE_URL is not set in .env.local");
  throw new Error("DATABASE_URL is not defined");
}

const pool = new Pool({ connectionString });

export default pool;