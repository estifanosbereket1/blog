import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import SectionPromo3 from "@/components/SectionPromo3";
import SectionAds from "./blog/SectionAds";
import SectionMagazine5 from "./blog/SectionMagazine5";
import SectionLatestPosts from "./blog/SectionLatestPosts";

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const page = parseInt(searchParams.page || "1");

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
        {/* <SectionPromo3 className="pb-16 lg:pb-28" /> */}
      </div>
    </div>
  );
};

export default BlogPage;
