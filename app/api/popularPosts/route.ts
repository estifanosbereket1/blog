import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const popularPosts = await prisma.post.findMany({
      include: {
        user: true,
      },
      orderBy: {
        views: "desc",
      },
      take: 6,
    });
    return NextResponse.json(popularPosts);
  } catch (error) {
    console.error(error);

    // Return a JSON response with the error message and a status code
    return NextResponse.json(
      { error: "Failed to fetch popular posts" },
      { status: 500 }
    );
  }
};
