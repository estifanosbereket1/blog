import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const allPost = await prisma.post.findMany({
      include: {
        user: true,
      },
      take: 5,
      skip: 1,
    });
    const formattedPosts = allPost.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString().slice(0, 10), // Convert Date object to ISO string
    }));
    return NextResponse.json(formattedPosts);
  } catch (error) {
    return NextResponse.error();
  }
};
