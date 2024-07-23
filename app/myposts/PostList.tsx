"use client";

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import MyPosts from "../blog/MyPosts";
import { NEXT_ROUTE } from "@/utils/constants";
import DeletePost from "./DeletePost";

interface PostListProps {
  posts: any[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/myPosts`, {
        headers: { id: id },
      });
      toast.success("Post Deleted");
      // Optionally, you can remove the post from the list without refreshing
      window.location.reload(); // Refresh the page to fetch updated posts
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      throw new Error("Failed to delete post");
    }
  };

  return (
    <div className={`grid gap-6 md:gap-8 grid-cols-1 w-full`}>
      {posts.length > 0 ? (
        posts.map((item: any) => (
          <div key={item.id} className="flex gap-2 items-start">
            <div className="lg:w-[800px] md:w-[500px] sm:[250px]">
              <MyPosts data={item} />
            </div>
            <DeletePost id={item.id} handleDelete={handleDelete} />
          </div>
        ))
      ) : (
        <h1>No Posts Yet</h1>
      )}
    </div>
  );
};

export default PostList;
