import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import { _getImgRd, _getTitleRd } from "@/contains/fakeData";
import PostCardMeta from "@/components/PostCardMeta/PostCardMeta";
import Link from "next/link";

export interface Card13Props {
  className?: string;
  post?: any;
}

const Card13: FC<Card13Props> = ({ className = "", post }) => {
  // console.log(post, "cccccccccccccccccccccccccccccccccccc");
  // const renderContent = () => {
  //   return (
  //     <>
  //       <div
  //         id="single-entry-content"
  //         className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert"
  //         dangerouslySetInnerHTML={{ __html: post.description }}
  //       />
  //     </>
  //   );
  // };
  return (
    <div className={`nc-Card13 relative flex ${className}`} data-nc-id="Card13">
      <div className="flex flex-col h-full   py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <Link
            href={`/post/${post.slug}`}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            {post.title}
          </Link>
        </h2>
        <span className="hidden sm:block my-3 text-slate-500 dark:text-slate-400 ">
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorem voluptatibus numquam ut pariatur officiis?
          </span>
        </span>
        {/* <span className="mt-4 block sm:hidden text-sm text-slate-500 ">
          May 20, 2021 · 2 min read
        </span> */}
        <div className="mt-auto hidden sm:block">
          <PostCardMeta
            createdAt={post.createdAt}
            name={post.user.name}
            userImage={post.user.image}
          />
        </div>
      </div>
      <Link
        href={"/blog-single"}
        className={`block relative h-full flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <NcImage
          alt=""
          src={post.imageSrc}
          containerClassName="absolute inset-0"
          className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
          sizes="400px"
          fill
        />
      </Link>
    </div>
  );
};

export default Card13;
