import React, { FC } from "react";
import MainNav2Logged from "./MainNav2Logged";
import { getCurrentUser } from "@/actions/getUser";

export interface HeaderLoggedProps {}

const HeaderLogged: FC<HeaderLoggedProps> = async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser);

  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40 ">
      <MainNav2Logged user={currentUser} />
    </div>
  );
};

export default HeaderLogged;
