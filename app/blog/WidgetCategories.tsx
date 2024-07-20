import CardCategory1 from "@/components/CardCategories/CardCategory1";
import React from "react";
import WidgetHeading1 from "./WidgetHeading1";
import axios from "axios";
import { NEXT_ROUTE } from "@/utils/constants";

export interface WidgetCategoriesProps {
  className?: string;
}

// interface Category {
//   id: number;
//   name: string;
//   // Add other relevant properties for a category here
// }

const WidgetCategories: React.FC<WidgetCategoriesProps> = async ({
  className = "bg-neutral-100 dark:bg-neutral-800",
}) => {
  let categories = [];

  try {
    const response = await axios.get(`${NEXT_ROUTE}/api/categories`);
    categories = response.data;
    // console.log(categories);
  } catch (error) {
    console.error("Failed to fetch categories", error);
  }

  return (
    <div
      className={`nc-WidgetCategories rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetCategories"
    >
      <WidgetHeading1
        title="✨ Categories"
        viewAll={{ label: "choose category", href: "/" }}
      />
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            data={categories}
            // Pass necessary props to CardCategory1
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetCategories;
