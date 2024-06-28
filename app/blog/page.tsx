import React from "react";
import SectionAds from "./SectionAds";
import SectionMagazine5 from "./SectionMagazine5";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import SectionPromo3 from "@/components/SectionPromo3";
import axios from "axios";
import { NEXT_ROUTE } from "@/utils/constants";

// DEMO DATA
export const dynamic = "force-dynamic";

const BlogPage = async ({ searchParams }: { searchParams: string }) => {
  const page = parseInt(searchParams) || 1;
  let posts = [];
  try {
    const post = await axios.get(`${NEXT_ROUTE}/api/posts`);
    posts = post.data;
  } catch (error) {
    console.error("Failed to fetch categories", error);
  }

  return (
    <div className="nc-BlogPage overflow-hidden relative">
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      <div className="container relative">
        {/* === SECTION 1 === */}
        <div className="pt-12 pb-16 lg:pb-28">
          <SectionMagazine5 />
        </div>

        {/* === SECTION 1 === */}
        <SectionAds />

        {/* === SECTION 8 === */}
        <SectionLatestPosts className="py-16 lg:py-28" page={page} />

        {/* === SECTION 1 === */}
        <SectionPromo3 className="pb-16 lg:pb-28" />
      </div>
    </div>
  );
};

export default BlogPage;
