import React, { FC } from "react";
import Card12 from "./Card12";
import Card13 from "./Card13";
import axios from "axios";
import { NEXT_ROUTE } from "@/utils/constants";

export interface SectionMagazine5Props {}

const SectionMagazine5: FC<SectionMagazine5Props> = async () => {
  const postSingle = await axios.get(`${NEXT_ROUTE}/api/allPost`);
  const post1 = postSingle.data[0];

  // console.log(postSingle.data, "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");

  // console.log(postAll, "everypost");

  return (
    <div className="nc-SectionMagazine5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <Card12 post={post1} />
        <div className="grid gap-6 md:gap-8">
          {postSingle.data.map((item: any) => (
            <Card13 key={item._id} post={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine5;
