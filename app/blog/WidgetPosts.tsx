import React, { FC } from "react";
import Card3Small from "./Card3Small";
import WidgetHeading1 from "./WidgetHeading1";
import axios from "axios";
import { NEXT_ROUTE } from "@/utils/constants";

export interface WidgetPostsProps {
  className?: string;
}

const WidgetPosts: FC<WidgetPostsProps> = async ({
  className = "bg-neutral-100 dark:bg-neutral-800",
}) => {
  const popularPots = await axios.get(`${NEXT_ROUTE}/api/popularPosts`);
  const posts = popularPots.data;

  return (
    <div
      className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetPosts"
    >
      <WidgetHeading1
        title="🎯 Popular Posts"
        viewAll={{ label: "per view", href: "/" }}
      />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {/* {[1, 1, 1, 1, 1, 1].map((_, index) => (
          <Card3Small
            className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={index}
          />
        ))} */}
        {posts.map((item: any) => (
          <Card3Small
            className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={item._id}
            post={item}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetPosts;
