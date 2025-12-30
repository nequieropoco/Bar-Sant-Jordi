// backend/src/prisma.ts
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// Opcional: helper para cerrar conexión al apagar el servidor
export async function disconnectPrisma() {
  await prisma.$disconnect();
}
