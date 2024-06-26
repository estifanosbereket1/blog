import axios from "axios";
import Heading from "@/components/Heading/Heading";

import Card3 from "../blog/Card3";
import { getCurrentUser } from "@/actions/getUser";

// interface SectionLatestPostsProps {
//   className?: string;
//   postCardName?: "card3";
// }

import { cookies } from "next/headers";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

export const dynamic = "force-dynamic";

const page = async () => {
  //   const posts = await fetchPosts();

  // const posts = response.data;
  const cookie = await getCookieData();

  return (
    // <div className={`nc-SectionLatestPosts relative ${className}`}>
    //   <div className="flex flex-col ml-40 lg:flex-row">
    //     <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
    //       <Heading>My posts 🎈</Heading>
    //       <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
    //         {posts.map((item: any) => (
    //           <Card3 key={item.id} data={item} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>mypost</div>
  );
};

export default page;
