"use client";

import { getCurrentUser } from "@/actions/getUser";
import ButtonWrapper from "@/comp/ButtonWrapper";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Textarea from "@/shared/Textarea/Textarea";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface CommentSecProps {
  user: any;
  slug: any;
}

const CommentSec: React.FC<CommentSecProps> = ({ user, slug }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      // Include the slug in the data object
      const requestData = { ...data, slug };
      await axios.post("/api/comments", requestData);
      toast.success("Commented Successfully");
      router.refresh();
    } catch (error) {
      toast.error("Couldn't comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses
        </h3>
        {user ? (
          <form className="nc-SingleCommentForm mt-5">
            <Textarea id="content" register={register} />
            <div className="mt-2 space-x-3">
              {/* <ButtonPrimary onClick={onSubmit}>Submit</ButtonPrimary> */}
              <ButtonWrapper
                ActionLabel="Register"
                onSubmit={handleSubmit(onSubmit)}
                disabled={loading}
              />
              <ButtonSecondary>Cancel</ButtonSecondary>
            </div>
          </form>
        ) : (
          <div>please login to write comment</div>
        )}
      </div>
    </div>
  );
};
export default CommentSec;
