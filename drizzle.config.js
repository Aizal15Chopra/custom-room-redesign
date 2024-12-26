import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:uHcXe8lxwDq4@ep-super-frost-a5syirla.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
});
