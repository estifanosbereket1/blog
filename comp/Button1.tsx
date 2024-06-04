"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button1: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      // className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
      //   outline
      //     ? "bg-white border-black text-black"
      //     : "bg-blue-700 border-blue-500 text-white"
      // }

      // ${
      //   small
      //     ? "py-1 text-sm font-light border-[1px]"
      //     : "py-3 text-sm font-semibold border-[2px]"
      // }
      // `}
      className={`ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl my-2 mx-4 rounded-lg px-4 py-2 mb-7  `}
    >
      {label}
    </button>
  );
};
export default Button1;
