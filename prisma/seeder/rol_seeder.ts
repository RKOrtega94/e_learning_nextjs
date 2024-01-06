import { PrismaClient } from "@prisma/client";

export default async function rolSeeder(prisma: PrismaClient) {
  const roles = [{ name: "admin" }, { name: "teacher" }, { name: "student" }];

  roles.forEach(async (rol) => {
    const checkRol = await prisma.role.findMany({
      where: { name: rol.name },
    });

    if (checkRol.length > 0) {
      return;
    }

    await prisma.role.create({ data: rol });
  });

  console.log("Roles seeded");
}
