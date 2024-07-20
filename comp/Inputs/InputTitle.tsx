import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputTitleProps {
  id: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required: boolean;
}

const InputTitle: React.FC<InputTitleProps> = ({
  errors,
  id,
  register,
  type = "text",
  required = true,
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        {...register(id, { required })}
        placeholder="Title"
        className="p-8 m-6 placeholder:text-gray-300 text-3xl w-full border-none focus:ring-0 outline-none bg-transparent focus:outline-none"
      />
    </div>
  );
};
export default InputTitle;
