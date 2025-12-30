// backend/prisma.config.ts
import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    db: {
      provider: 'mysql',
      url: { fromEnvVar: 'DATABASE_URL' },
    },
  },
});
