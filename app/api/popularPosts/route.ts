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

    const formattedPosts = popularPosts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString().slice(0, 10), // Convert Date object to ISO string
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error(error);

    // Return a JSON response with the error message and a status code
    return NextResponse.json(
      { error: "Failed to fetch popular posts" },
      { status: 500 }
    );
  }
};
