import React from "react";
import Avatar from "@/shared/Avatar/Avatar";
import Badge from "@/shared/Badge/Badge";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Comment from "@/shared/Comment/Comment";
import NcImage from "@/shared/NcImage/NcImage";
import SocialsList from "@/shared/SocialsList/SocialsList";
import Textarea from "@/shared/Textarea/Textarea";
import { _getImgRd, _getPersonNameRd, _getTitleRd } from "@/contains/fakeData";
import Tag from "@/shared/Tag/Tag";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import CommentSec from "../CommentSec";
import { getCurrentUser } from "@/actions/getUser";
import { Post } from "@prisma/client";
import { NEXT_ROUTE } from "@/utils/constants";

const BlogSingle = async ({ params }: { params: Params }) => {
  const { slug } = params;

  //   console.log(slug, "mmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
  let singlePost: any;
  let comments: any;

  const user = await getCurrentUser();

  try {
    const post = await axios.get(`${NEXT_ROUTE}/api/posts/${slug}`);
    singlePost = post.data;
    console.log(post.data, "jjjjjjjjjjjjjjjjjjjjjjjjj");
  } catch (error) {
    console.error("Failed to fetch categories", error);
  }

  try {
    const comm = await axios.get(`${NEXT_ROUTE}/api/comments`);
    comments = comm.data;
  } catch (error) {
    console.error("Failed to fetch categories", error);
  }

  const renderHeader = async () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge href="/" color="purple" name={singlePost?.catSlug} />
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            {singlePost?.title}
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            We’re an online magazine dedicated to covering the best in
            international product design. We started as a little blog back in
            2002 covering student work and over time
          </span>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
              <Avatar
                containerClassName="flex-shrink-0"
                sizeClass="w-8 h-8 sm:h-11 sm:w-11 "
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <div className="block font-semibold">
                    {singlePost?.user?.name}
                  </div>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {singlePost?.createdAt.toString().slice(0, 10)}
                  </span>
                  <span className="mx-2 font-semibold">·</span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    6 min read
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-1.5 sm:ml-3">
              <SocialsList />
            </div>
          </div>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <>
        <div
          id="single-entry-content"
          className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: singlePost?.description }}
        />
      </>
    );
  };

  const renderTags = () => {
    return (
      <div className="max-w-screen-md mx-auto flex flex-wrap space-x-2">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    );
  };

  const renderAuthor = () => {
    return (
      <div className="max-w-screen-md mx-auto ">
        <div className="nc-SingleAuthor flex">
          <Avatar sizeClass="w-11 h-11 md:w-24 md:h-24" />
          <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
              WRITEN BY
            </span>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              <div>{singlePost.user.name}</div>
            </h2>
            <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
              There’s no stopping the tech giant. Apple now opens its 100th
              store in China.There’s no stopping the tech giant.
              <a className="text-primary-6000 font-medium ml-1" href="##">
                Readmore
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderCommentForm = () => {
    return <CommentSec user={user} slug={slug} />;
  };

  const renderCommentLists = () => {
    return (
      <div className="max-w-screen-md mx-auto">
        <ul className="nc-SingleCommentLists space-y-5">
          {comments?.map((item: any) => (
            <li key={item._id}>
              <Comment data={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderPostRelated = (_: any, index: number) => {
    return (
      <div
        key={index}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link href={"/blog-single"} />
        <Image
          alt="Related"
          fill
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          src={_getImgRd()}
          sizes="400px"
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <Badge name="Categories" />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{_getTitleRd()}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {_getPersonNameRd()}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">May 20, 2021</span>
          </div>
        </div>
        <Link href={"/blog-single"} />
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16 ">
      {renderHeader()}
      {singlePost.imageSrc && (
        <NcImage
          alt=""
          width={1260}
          height={750}
          className="w-full rounded-xl"
          containerClassName="container my-10 sm:my-12 "
          src={singlePost?.imageSrc}
        />
      )}

      <div className="nc-SingleContent container space-y-10">
        {renderContent()}
        {renderTags()}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        {renderAuthor()}
        {renderCommentForm()}
        {renderCommentLists()}
      </div>
      <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
        <div className="container ">
          <h2 className="text-3xl font-semibold">Related posts</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {/*  */}
            {[1, 1, 1, 1].filter((_, i) => i < 4).map(renderPostRelated)}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
