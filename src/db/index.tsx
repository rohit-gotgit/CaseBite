import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      cachedPrisma?: PrismaClient;
    }
  }
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!(global as any).cachedPrisma) {
    (global as NodeJS.Global).cachedPrisma = new PrismaClient();
  }
  prisma = (global as NodeJS.Global & typeof globalThis).cachedPrisma!;
}

export const db = prisma;
