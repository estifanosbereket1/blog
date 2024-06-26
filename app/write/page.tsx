// "use client";
// import dynamic from "next/dynamic";
// import ButtonWrapper from "@/comp/ButtonWrapper";
// import ImageUpload from "@/comp/Inputs/ImageUpload";
// import InputTitle from "@/comp/Inputs/InputTitle";
// import { useEffect, useState } from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import SlugDropdown from "@/comp/Inputs/SlugDropdown";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { getCurrentUser } from "@/actions/getUser";

import { getCurrentUser } from "@/actions/getUser";
import WriteWrapper from "@/comp/WriteWrapper";

// // Import ReactQuill dynamically with SSR disabled
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.bubble.css";
// import "react-quill/dist/quill.snow.css";
// import { log } from "console";

// const Page = () => {
//   const router = useRouter();
//   let user: any = null;
//   const [isPosting, setIsPosting] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const currentUser = await getCurrentUser();
//         console.log(currentUser);
//         user = currentUser;
//       } catch (error) {
//         console.error("Failed to fetch user", error);
//       }
//     };
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (!user) {
//       router.push("/login");
//     }
//   }, [user, router]);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors },
//     reset,
//   } = useForm<FieldValues>({
//     defaultValues: {
//       catSlug: "",
//       imageSrc: "",
//       title: "",
//       description: "",
//       slug: "",
//     },
//   });

//   const imageSrc = watch("imageSrc");
//   const description = watch("description");
//   const title = watch("title");

//   const setCustomValue = (id: string, value: any) => {
//     setValue(id, value, {
//       shouldDirty: true,
//       shouldTouch: true,
//       shouldValidate: true,
//     });
//   };

//   const slugify = (str: string) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   useEffect(() => {
//     if (title) {
//       setValue("slug", slugify(title));
//     }
//   }, [title, setValue]);

//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     setIsPosting(true);
//     try {
//       await axios.post("http://localhost:3000/api/posts", data);
//       setIsPosting(false);
//       toast.success("Item Posted");
//       router.push("/");
//     } catch (error) {
//       setIsPosting(false);
//       toast.error("couldn't post");
//     }
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="">
//       <InputTitle id="title" register={register} errors={errors} required />
//       <div className="w-auto my-8">
//         <ImageUpload
//           value={imageSrc}
//           onChange={(value) => setCustomValue("imageSrc", value)}
//         />
//       </div>
//       <div className="flex gap-5 items-center justify-start">
//         <p>Category of post:</p>
//         <SlugDropdown
//           id="catSlug"
//           register={register}
//           errors={errors}
//           required
//         />
//       </div>

//       {/* Check if window is defined to avoid SSR issues */}
//       {typeof window !== "undefined" && (
//         <ReactQuill
//           className="w-full my-11"
//           theme="bubble"
//           value={description}
//           onChange={(value) => setCustomValue("description", value)}
//           placeholder="place your post here"
//         />
//       )}
//       <ButtonWrapper
//         onSubmit={handleSubmit(onSubmit)}
//         ActionLabel="Publish"
//         disabled={isPosting}
//       />
//     </div>
//   );
// };

// export default Page;

// "use client";
// import dynamic from "next/dynamic";
// import ButtonWrapper from "@/comp/ButtonWrapper";
// import ImageUpload from "@/comp/Inputs/ImageUpload";
// import InputTitle from "@/comp/Inputs/InputTitle";
// import { useEffect, useState } from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import SlugDropdown from "@/comp/Inputs/SlugDropdown";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { getCurrentUser } from "@/actions/getUser";
// import { User } from "@/types";

// // Import ReactQuill dynamically with SSR disabled
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.bubble.css";
// import "react-quill/dist/quill.snow.css";

// interface WriteProps {
//   user: User | null;
// }

// //accept props from navlinks

// const Page: React.FC<WriteProps> = () => {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPosting, setIsPosting] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const currentUser = await getCurrentUser();
//         console.log(currentUser, "xxxxxxxxxxxxxxxxxxxx");
//         setUser(currentUser);
//       } catch (error) {
//         console.error("Failed to fetch user", error);
//       } finally {
//         setIsLoading(false); // Ensure loading state is set to false after fetching
//       }
//     };
//     fetchUser();
//   }, []);

//   // Log user state when it changes
//   useEffect(() => {
//     console.log(user, "userrrrrrrrrrrrrr");
//     if (!isLoading && !user) {
//       router.push("/login");
//     }
//   }, [user, isLoading, router]);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors },
//     reset,
//   } = useForm<FieldValues>({
//     defaultValues: {
//       catSlug: "",
//       imageSrc: "",
//       title: "",
//       description: "",
//       slug: "",
//     },
//   });

//   const imageSrc = watch("imageSrc");
//   const description = watch("description");
//   const title = watch("title");

//   const setCustomValue = (id: string, value: any) => {
//     setValue(id, value, {
//       shouldDirty: true,
//       shouldTouch: true,
//       shouldValidate: true,
//     });
//   };

//   const slugify = (str: string) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   useEffect(() => {
//     if (title) {
//       setValue("slug", slugify(title));
//     }
//   }, [title, setValue]);

//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     setIsPosting(true);
//     try {
//       await axios.post("/api/posts", data);
//       setIsPosting(false);
//       toast.success("Item Posted");
//       router.push("/");
//     } catch (error) {
//       setIsPosting(false);
//       toast.error("Couldn't post");
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>; // Show loading while fetching user
//   }

//   return (
//     <div>
//       <InputTitle id="title" register={register} errors={errors} required />
//       <div className="w-auto my-8">
//         <ImageUpload
//           value={imageSrc}
//           onChange={(value) => setCustomValue("imageSrc", value)}
//         />
//       </div>
//       <div className="flex gap-5 items-center justify-start">
//         <p>Category of post:</p>
//         <SlugDropdown
//           id="catSlug"
//           register={register}
//           errors={errors}
//           required
//         />
//       </div>
//       {typeof window !== "undefined" && (
//         <ReactQuill
//           className="w-full my-11"
//           theme="bubble"
//           value={description}
//           onChange={(value) => setCustomValue("description", value)}
//           placeholder="Place your post here"
//         />
//       )}
//       <ButtonWrapper
//         onSubmit={handleSubmit(onSubmit)}
//         ActionLabel="Publish"
//         disabled={isPosting}
//       />
//     </div>
//   );
// };

// export default Page;

// "use client";
// import dynamic from "next/dynamic";
// import ButtonWrapper from "@/comp/ButtonWrapper";
// import ImageUpload from "@/comp/Inputs/ImageUpload";
// import InputTitle from "@/comp/Inputs/InputTitle";
// import { useEffect, useState } from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import SlugDropdown from "@/comp/Inputs/SlugDropdown";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { getCurrentUser } from "@/actions/getUser";
// import { User } from "@/types";

// // Import ReactQuill dynamically with SSR disabled
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.bubble.css";
// import "react-quill/dist/quill.snow.css";

// const Page: React.FC = () => {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPosting, setIsPosting] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const currentUser = await getCurrentUser();
//         console.log(currentUser, "Fetched user from getCurrentUser");
//         setUser(currentUser);
//       } catch (error) {
//         console.error("Failed to fetch user", error);
//       } finally {
//         setIsLoading(false); // Ensure loading state is set to false after fetching
//       }
//     };
//     fetchUser();
//   }, []);

//   // Log user state when it changes
//   useEffect(() => {
//     console.log(user, "Updated user state");
//     if (!isLoading && !user) {
//       router.push("/login");
//     }
//   }, [user, isLoading, router]);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors },
//     reset,
//   } = useForm<FieldValues>({
//     defaultValues: {
//       catSlug: "",
//       imageSrc: "",
//       title: "",
//       description: "",
//       slug: "",
//     },
//   });

//   const imageSrc = watch("imageSrc");
//   const description = watch("description");
//   const title = watch("title");

//   const setCustomValue = (id: string, value: any) => {
//     setValue(id, value, {
//       shouldDirty: true,
//       shouldTouch: true,
//       shouldValidate: true,
//     });
//   };

//   const slugify = (str: string) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   useEffect(() => {
//     if (title) {
//       setValue("slug", slugify(title));
//     }
//   }, [title, setValue]);

//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     setIsPosting(true);
//     try {
//       await axios.post("/api/posts", data);
//       setIsPosting(false);
//       toast.success("Item Posted");
//       router.push("/");
//     } catch (error) {
//       setIsPosting(false);
//       toast.error("Couldn't post");
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>; // Show loading while fetching user
//   }

//   return (
//     <div>
//       <InputTitle id="title" register={register} errors={errors} required />
//       <div className="w-auto my-8">
//         <ImageUpload
//           value={imageSrc}
//           onChange={(value) => setCustomValue("imageSrc", value)}
//         />
//       </div>
//       <div className="flex gap-5 items-center justify-start">
//         <p>Category of post:</p>
//         <SlugDropdown
//           id="catSlug"
//           register={register}
//           errors={errors}
//           required
//         />
//       </div>
//       {typeof window !== "undefined" && (
//         <ReactQuill
//           className="w-full my-11"
//           theme="bubble"
//           value={description}
//           onChange={(value) => setCustomValue("description", value)}
//           placeholder="Place your post here"
//         />
//       )}
//       <ButtonWrapper
//         onSubmit={handleSubmit(onSubmit)}
//         ActionLabel="Publish"
//         disabled={isPosting}
//       />
//     </div>
//   );
// };

// export default Page;

export const dynamic = "force-dynamic";
const page = async () => {
  const user = await getCurrentUser();
  return (
    <div>
      <WriteWrapper user={user} />
    </div>
  );
};
export default page;
