import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://rooomify-ai_owner:Rq0PhLnloiM1@ep-wispy-base-a5418zl1.us-east-2.aws.neon.tech/rooomify-ai?sslmode=require',
  },
});
