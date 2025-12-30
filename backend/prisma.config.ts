import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Prisma necesita que esto sea string, así que le aseguramos un string.
    // Si por lo que sea no está definida, sería "" (aunque en producción SIEMPRE debería estar).
    url: process.env.DATABASE_URL || "",
  },
});
