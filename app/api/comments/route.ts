import { getCurrentUser } from "@/actions/getUser";
import prisma from "@/utils/connection";
import { connect } from "http2";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

// { params }: { params: Params }

export const GET = async (request: Request, { params }: { params: Params }) => {
  const { searchParams } = new URL(request.url);

  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: {
        user: true,
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    // console.error("Error fetching posts:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

// export const POST = async (request: Request) => {
//   const user = await getCurrentUser();
//   const body = await request.json();

//   console.log(body, "comment body");

//   const userEmail = user?.email;

//   if (!userEmail) {
//     return new NextResponse("Unauthorized", { status: 401 });
//   }

//   try {
//     const comment = await prisma.comment.create({
//       data: { ...body, userEmail },
//       include: {
//         post: true,
//       },
//     });

//     return NextResponse.json(comment);
//   } catch (error) {
//     console.error("Error creating comment:", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// };

// export const POST = async (request: Request) => {
//   const user = await getCurrentUser();
//   const body = await request.json();

//   const userEmail = user?.email;

//   if (!userEmail) {
//     return new NextResponse("Unauthorized", { status: 401 });
//   }

//   try {
//     const post = await prisma.post.findUnique({
//       where: { slug: body.slug }, // Assuming 'slug' is the identifier for posts
//     });

//     if (!post) {
//       return new NextResponse("Post not found", { status: 404 });
//     }

//     const comment = await prisma.comment.create({
//       data: {
//         ...body,
//         userEmail,
//         post: { connect: { id: post.id } },
//         user: { connect: { email: userEmail } },
//         // Connect the comment to the post
//       },
//       include: {
//         post: true,
//       },
//     });
//     console.log(comment, "ccccccccccccccccccc");

//     return NextResponse.json(comment);
//   } catch (error) {
//     console.error("Error creating comment:", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// };

export const POST = async (request: Request) => {
  const user = await getCurrentUser();
  const body = await request.json();

  const userEmail = user?.email;

  if (!userEmail) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { slug: body.slug }, // Assuming 'slug' is the identifier for posts
    });

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const comment = await prisma.comment.create({
      data: {
        content: body.content, // Assuming 'content' is a required field for comments
        post: { connect: { id: post.id } },
        user: { connect: { email: userEmail } },
        // Connect the comment to the post and the user
      },
    });

    // console.log(comment, "ccccccccccccccccccc");

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
