import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const allPost = await prisma.post.findMany({
      include: {
        user: true,
      },
    });
    return NextResponse.json(allPost);
  } catch (error) {
    return NextResponse.error();
  }
};
