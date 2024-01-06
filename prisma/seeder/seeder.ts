import { PrismaClient } from "@prisma/client";
import rolSeeder from "./rol_seeder";

const prisma = new PrismaClient();

async function main() {
  rolSeeder(prisma);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
