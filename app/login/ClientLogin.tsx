"use client";

import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Input1 from "@/comp/Inputs/Input1";
import ButtonWrapper from "@/comp/ButtonWrapper";

const loginSocials = [
  {
    name: "Continue with Github",
    icon: FaGithub,
    method: "github",
  },
  {
    name: "Continue with Google",
    icon: FcGoogle,
    method: "google",
  },
];

const ClientLogin = () => {
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      const result = await signIn("credentials", { ...data, redirect: false });

      setIsLoading(false);

      if (result?.error) {
        toast.error("Couldn't log in");
      } else {
        toast.success("User logged in successfully");
        router.push("/");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Couldn't log in");
      // console.log(error);
    }
  };

  const handleSocialLogin = async (method: string) => {
    setIsLoading(true);

    try {
      // Redirect to home page after selecting Google account
      await signIn(method, { callbackUrl: "/" });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(`Couldn't log in with ${method}`);
      // console.log(error);
    }
  };

  return (
    <div className={`nc-PageLogin`} data-nc-id="PageLogin">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSocialLogin(item.method)}
                className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px] cursor-pointer"
              >
                <item.icon className="flex-shrink-0 mr-2 text-lg" size={24} />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input1
                type="email"
                id="email"
                label="Email"
                disabled={loading}
                register={register}
                errors={errors}
                required
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input1
                id="password"
                type="password"
                label="Password"
                disabled={loading}
                register={register}
                errors={errors}
                required
              />
            </label>
            <ButtonWrapper
              ActionLabel="Login"
              onSubmit={handleSubmit(onSubmit)}
              disabled={loading}
            />
          </div>
          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-green-600" href="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
