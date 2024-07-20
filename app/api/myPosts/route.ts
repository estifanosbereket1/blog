import { getCurrentUser } from "@/actions/getUser";
import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const userEmail = request.headers.get("userEmail");
  console.log(userEmail);
  try {
    const user = await getCurrentUser();
    console.log(user);
    const allPost = await prisma.post.findMany({
      where: { userEmail: userEmail as string },
      include: { user: true },
    });
    const formattedPosts = allPost.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString().slice(0, 10), // Convert Date object to ISO string
    }));
    console.log(formattedPosts);
    return NextResponse.json(formattedPosts);
  } catch (error) {
    return NextResponse.error();
  }
};
