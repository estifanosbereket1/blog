import axios from "axios";
import Heading from "@/components/Heading/Heading";

import Card3 from "../blog/Card3";
import { getCurrentUser } from "@/actions/getUser";

interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
}

const page = async ({ postCardName = "card3", className = "" }) => {
  //   const posts = await fetchPosts();

  try {
    const response = await axios.get("http://localhost:3000/api/myposts");
    console.log(response.data);
  } catch (error) {}

  // const posts = response.data;

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
