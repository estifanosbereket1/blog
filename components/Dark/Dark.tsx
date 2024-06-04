"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Dark = () => {
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(true);

  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
      setDark(true);
    } else {
      setTheme("light");
      setDark(false);
    }
  };
  return (
    <div>
      <div className="items-center flex  ">
        {dark ? (
          <MdOutlineLightMode size={25} onClick={toggle} />
        ) : (
          <MdDarkMode color="white" size={25} onClick={toggle} />
        )}
      </div>
    </div>
  );
};
export default Dark;
