"use client";

import { useRouter } from "next/navigation";

interface PagProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pag: React.FC<PagProps> = ({ page, hasNext, hasPrev }) => {
  const router = useRouter();
  // console.log(page, "pppppppppppp");
  // console.log(hasPrev, "prev");
  // console.log(hasNext, "next");

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-neutral-700"
          onClick={() => router.push(`?page=${page - 1}`)}
          disabled={!hasPrev}
        >
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => router.push(`?page=${page + 1}`)}
          disabled={!hasNext}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pag;
