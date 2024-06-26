import { getCurrentUser } from "@/actions/getUser";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/utils/connection";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    // const user = await getCurrentUser();
    // console.log(user, "pppppppppppppppppppppppppppppppppppppp");
    // const session = await getSession();
    // console.log(session?.user, "pppppppppppp");
    const user = await getCurrentUser();
    console.log(user, "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
    // if (!user) {
    //   return new NextResponse("No user authenticated", { status: 401 });
    // }

    // const myPosts = await prisma.post.findMany({
    //   where: {
    //     userEmail: user.email,
    //   },
    // });

    // return NextResponse.json(myPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse("Failed to fetch posts", { status: 500 });
  }
};
