import axios from "axios";
import Heading from "@/components/Heading/Heading";

import WidgetCategories from "./WidgetCategories";
import WidgetPosts from "./WidgetPosts";
import Card3 from "./Card3";
import Pag from "@/comp/Pag";

interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
  page: number;
  cat?: string;
}

// const fetchPosts = async (page: number, cat: string) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`
//     );
//     // console.log(response.data);

//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch posts:", error);
//     throw new Error("Failed to fetch posts");
//   }
// };

const fetchPosts = async (page: number, cat: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Failed to fetch posts");
  }
};

const SectionLatestPosts = async ({
  postCardName = "card3",
  className = "",
  page,
  cat = "",
}: SectionLatestPostsProps) => {
  const POST_PER_PAGE = 2;
  console.log(
    page,
    "paggggggggggggggggggggggggggggggggggggggggggggggggggggggggggyyyyyyyyyy"
  );
  const { posts, count } = await fetchPosts(page, cat);

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>Latest Articles 🎈</Heading>
          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {posts.map((item: any) => (
              <Card3 key={item.id} data={item} />
            ))}
          </div>
          <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pag hasPrev={hasPrev} hasNext={hasNext} page={page} />
          </div>
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetCategories />
          <WidgetPosts />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
