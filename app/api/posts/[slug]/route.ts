import prisma from "@/utils/connection";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: Params }) => {
  const { slug } = params;

  // console.log(slug, "slugggggggggggggggggg");

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: {
        user: true,
      },
    });
    // console.log(post, "single posttttttttttttt");
    return NextResponse.json(post);
  } catch (error) {
    // console.error("Error fetching posts:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
