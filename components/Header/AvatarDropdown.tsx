"use client";

import { Popover, Transition } from "@/app/headlessui";
import { avatarImgs } from "@/contains/fakeData";
import { Fragment } from "react";
import Avatar from "@/shared/Avatar/Avatar";
import SwitchDarkMode2 from "@/shared/SwitchDarkMode/SwitchDarkMode2";
import Link from "next/link";
import Image from "next/image";
import { PiSignIn } from "react-icons/pi";
import { User } from "@prisma/client";
import useLogin from "@/hooks/useLogin";
import { signOut } from "next-auth/react";

interface AvatarDropDownProps {
  user?: User | null | undefined;
}

const AvatarDropdown: React.FC<AvatarDropDownProps> = ({ user }) => {
  console.log(user?.image);
  return (
    <div className="AvatarDropdown ">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center`}
            >
              {user?.image ? (
                <Image
                  src={user.image}
                  className="w-6 h-6"
                  alt="userImage"
                  width={24}
                  height={24}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/placeholder.gif";
                  }}
                />
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-[260px] px-4 mt-3.5 -right-10 sm:right-0 sm:px-0">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6">
                    <div className="flex items-center space-x-3">
                      {user?.image ? (
                        <Avatar imgSrc={user?.image} sizeClass="w-12 h-12" />
                      ) : (
                        <Image
                          className="w-12 h-12 rounded-full"
                          src="/images/placeholder.gif"
                          alt="placeholder"
                          height={12}
                          width={12}
                        />
                      )}

                      <div className="flex-grow">
                        <h4 className="font-semibold">
                          {user?.name || "user"}{" "}
                        </h4>
                        {/* <p className="text-xs mt-0.5">Los Angeles, CA</p> */}
                      </div>
                    </div>

                    <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />

                    {/* ------------------ 2 --------------------- */}
                    <div className="flex items-center justify-between p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <p className="text-sm font-medium ">Change theme</p>
                        </div>
                      </div>
                      <SwitchDarkMode2 />
                    </div>

                    {/* ------------------ 2 --------------------- */}
                    <Link
                      href={"/#"}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      onClick={() => close()}
                    >
                      {user && (
                        <div>
                          <div
                            className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300"
                            onClick={() => signOut()}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 12H3.62"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium ">{"Log out"}</p>
                          </div>
                        </div>
                      )}
                      {!user && (
                        <div className="flex gap-5 flex-col justify-center items-center">
                          <Link className="text-sm font-medium" href="/signup">
                            Sign up
                          </Link>

                          <Link className="text-sm font-medium" href="/login">
                            Log in
                          </Link>
                        </div>
                      )}
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default AvatarDropdown;
