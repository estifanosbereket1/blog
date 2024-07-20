// "use server";

// import axios from "axios";
// import Heading from "@/components/Heading/Heading";

// import { getCurrentUser } from "@/actions/getUser";

// import { cookies } from "next/headers";
// import { NEXT_ROUTE } from "@/utils/constants";
// import MyPosts from "../blog/MyPosts";
// import toast from "react-hot-toast";
// import DeletePost from "./DeletePost";

// async function getCookieData() {
//   const cookieData = cookies().getAll();
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(cookieData);
//     }, 1000)
//   );
// }

// export const dynamic = "force-dynamic";

// const fetchUserPosts = async (userEmail: string | undefined) => {
//   try {
//     const userPosts = await axios.get(`${NEXT_ROUTE}/api/myPosts`, {
//       headers: { userEmail: userEmail },
//     });
//     return userPosts.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error("Axios error:", error.response?.data || error.message);
//     } else {
//       console.error("Unexpected error:", error);
//     }
//     throw new Error("Failed to fetch posts");
//   }
// };

// const handleDelete = async (id: string) => {
//   try {
//     await axios.delete(`${NEXT_ROUTE}/api/myPosts`, {
//       headers: { id: id },
//     });
//     toast.success("Post Deleted");
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error("Axios error:", error.response?.data || error.message);
//     } else {
//       console.error("Unexpected error:", error);
//     }
//     throw new Error("Failed to fetch posts");
//   }
// };

// const page = async () => {
//   //   const posts = await fetchPosts();

//   // const posts = response.data;
//   const cookie = await getCookieData();
//   const user = await getCurrentUser();
//   const posts = await fetchUserPosts(user?.email);

//   console.log(user);
//   console.log(posts, "iiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

//   return (
//     <div className={`nc-SectionLatestPosts relative `}>
//       <div className="flex flex-col ml-40 lg:flex-row">
//         <div className="w-full lg:w-full xl:full xl:pr-14">
//           <Heading>My posts 🎈</Heading>
//           <div className={`grid gap-6 md:gap-8 grid-cols-1 w-full`}>
//             {posts.length > 0 ? (
//               posts.map((item: any) => (
//                 <div key={item.id} className="flex gap-2 items-start">
//                   {/* <h1>{item.title}</h1> */}
//                   <div className="lg:w-[800px] md:w-[500px] sm:[250px]">
//                     <MyPosts data={item} />
//                   </div>
//                   {/* <button
//                     onClick={() => handleDelete(item.id)}
//                     className="text-xl self-center  text-white bg-red-600 px-5 py-2 rounded-xl"
//                   >
//                     Delete Post
//                   </button> */}
//                   <DeletePost id={item.id} handleDelete={handleDelete} />
//                 </div>
//               ))
//             ) : (
//               <>
//                 <h1>No Posts Yet</h1>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div>mypost</div>
//   );
// };

// export default page;

import axios from "axios";
import Heading from "@/components/Heading/Heading";

import { getCurrentUser } from "@/actions/getUser";
import { cookies } from "next/headers";
import { NEXT_ROUTE } from "@/utils/constants";
import PostList from "./PostList";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

export const dynamic = "force-dynamic";

const fetchUserPosts = async (userEmail: string | undefined) => {
  try {
    const userPosts = await axios.get(`${NEXT_ROUTE}/api/myPosts`, {
      headers: { userEmail: userEmail },
    });
    return userPosts.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Failed to fetch posts");
  }
};

const Page = async () => {
  const cookie = await getCookieData();
  const user = await getCurrentUser();
  const posts = await fetchUserPosts(user?.email);

  return (
    <div className={`nc-SectionLatestPosts relative`}>
      <div className="flex flex-col ml-40 lg:flex-row h-[500px]">
        <div className="w-full lg:w-full xl:full xl:pr-14">
          <Heading>My posts 🎈</Heading>
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Page;
