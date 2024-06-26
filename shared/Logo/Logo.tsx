import React from "react";
import logoImg from "@/images/logo.svg";
import logoLightImg from "@/images/logo-light.svg";
import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <p
          className={`block h-8 sm:h-10 w-auto font-bold text-xl text-black ${
            imgLight ? "dark:hidden" : ""
          }`}
        >
          EchoBlogs
        </p>
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <p className="hidden h-8 sm:h-10 w-auto font-bold text-xl text-white dark:block">
          EchoBlogs
        </p>
      )}
    </Link>
  );
};

export default Logo;
