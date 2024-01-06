import { PrismaClient } from "@prisma/client";

export default async function permissionSeeder(prisma: PrismaClient) {
  const permissions = [{ name: "create_classroom" }];

  permissions.forEach(async (permission) => {
    const checkPermission = await prisma.permission.findMany({
      where: { name: permission.name },
    });

    if (checkPermission.length > 0) {
      return;
    }

    await prisma.permission.create({ data: permission });
  });

  console.log("Permissions seeded");
}
