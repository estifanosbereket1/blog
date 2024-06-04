import React, { TextareaHTMLAttributes } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  rows?: number;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldError;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  className = "",
  children,
  errors,
  id,
  required,
  register,
  rows = 4,
  ...props
}) => {
  return (
    <textarea
      id={id}
      {...register(id, { required })}
      className={`block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${className}`}
      rows={rows}
      {...props}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
