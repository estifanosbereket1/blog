// import prisma from "@/utils/connection";
// import { NextResponse } from "next/server";

// export const GET = async (request: Request) => {
//   const { searchParams } = new URL(request.url);

//   console.log(searchParams, "serverparams");
//   const page = Number(searchParams.get("page"));

//   console.log(page, "serveer");

//   const POST_PER_PAGE = 2;

//   const query = {
//     skip: (page - 1) * POST_PER_PAGE,
//     take: POST_PER_PAGE,
//     include: {
//       user: true,
//     },
//   };

//   try {
//     const [posts, count] = await prisma.$transaction([
//       prisma.post.findMany(query),
//       prisma.post.count(),
//     ]);

//     return NextResponse.json({ posts, count });
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// };

import { getCurrentUser } from "@/actions/getUser";
import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page")) || 1;
  const cat = searchParams.get("cat");
  // Default to page 1 if not provided
  // console.log(searchParams, "xxxxxxxxxxxxxxxxxxx");

  const POST_PER_PAGE = 2;

  const query = {
    skip: (page - 1) * POST_PER_PAGE,
    take: POST_PER_PAGE,
    include: {
      user: true,
    },
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return NextResponse.json({ posts, count });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const { catSlug, slug, description, imageSrc, title } = body;

  const user = await getCurrentUser();
  const userEmail = user?.email;

  if (!userEmail) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const category = await prisma.category.findUnique({
      where: {
        slug: body.catSlug,
      },
    });

    const post = await prisma.post.create({
      data: {
        imageSrc,
        description,
        title,
        slug,
        cat: { connect: { id: category?.id } },
        user: { connect: { id: user.id } },
      },
    });

    // console.log(post, "posttttttttttttttttt");
    return NextResponse.json(post);
  } catch (error) {
    console.log("error creating a post", error);
    return new NextResponse("Server error", { status: 500 });
  }
  //   const { catSlug, imageSrc, description, title } = body;

  //   try {
  //     const post = await prisma.post.create({
  //       data: {
  //         catSlug,
  //         title,
  //         imageSrc,
  //         description,
  //       },
  //     });
  //   } catch (error) {}

  return NextResponse.json(body);
};
