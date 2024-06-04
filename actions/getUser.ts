// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import prisma from "@/utils/connection";
// import { getServerSession } from "next-auth";

// const getServer = async () => {
//   return await getServerSession(authOptions);
// };

// export const getCurrentUser = async () => {
//   try {
//     const session = await getServer();

//     if (!session?.user?.email) {
//       return null;
//     }

//     const user = await prisma.user.findUnique({
//       where: {
//         email: session.user.email,
//       },
//     });

//     if (!user) {
//       return null;
//     }

//     return user;
//   } catch (error) {}
// };

// getUser.ts
// @/actions/getUser.ts

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/utils/connection";
import { log } from "console";
import { getServerSession } from "next-auth";

const getServer = async () => {
  return await getServerSession(authOptions);
};

export const getCurrentUser = async () => {
  try {
    const session = await getServer();

    if (!session?.user?.email) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    return user || null;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
