"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import React, { FC, useState } from "react";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input1 from "@/comp/Inputs/Input1";
import Button from "@/comp/Button1";
import Button1 from "@/comp/Button1";
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

const PageSignUp = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      await axios.post("/api/register", data);
      toast.success("User registered Successfully");
      router.push("/login");
      setLoading(false);
    } catch (error) {
      toast.error("Couldn't register user");
    }
  };

  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <div
                key={index}
                onClick={() => signIn(item.method)}
                className=" flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                {/* <Image
                  sizes="40px"
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                /> */}
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
                Name
              </span>
              <Input1
                id="name"
                label="Name"
                disabled={loading}
                register={register}
                errors={errors}
                required
              />
            </label>
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
            {/* <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input1
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label> */}
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
            {/* <ButtonPrimary type="submit" onClick={handleSubmit(onSubmit)}>
              Continue
            </ButtonPrimary> */}
            {/* <Button1 onSubmit={} disabled={loading} label="Register" /> */}
            <ButtonWrapper
              ActionLabel="Register"
              onSubmit={handleSubmit(onSubmit)}
              disabled={loading}
            />
          </div>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link className="text-green-600" href="/login">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
