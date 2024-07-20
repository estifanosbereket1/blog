"use client";

import { FC } from "react";

interface DeletePros {
  id: string;
  handleDelete: (id: string) => void;
}

const DeletePost: FC<DeletePros> = ({ id, handleDelete }) => {
  return (
    <div>
      <button
        onClick={() => handleDelete(id)}
        className="text-xl self-center  text-white bg-red-600 px-5 py-2 rounded-xl hover:opacity-75"
      >
        Delete Post
      </button>
    </div>
  );
};
export default DeletePost;
