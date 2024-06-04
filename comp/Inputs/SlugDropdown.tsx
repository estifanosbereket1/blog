import { MdCardTravel, MdOutlineFastfood } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { FaArtstation } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const catArray = [
  {
    label: "Travel",
    icon: <MdCardTravel className="inline-block mr-2" />,
  },
  {
    label: "Food",
    icon: <MdOutlineFastfood className="inline-block mr-2" />,
  },
  {
    label: "Fashion",
    icon: <GiClothes className="inline-block mr-2" />,
  },
  {
    label: "Art",
    icon: <FaArtstation className="inline-block mr-2" />,
  },
  {
    label: "Technology",
    icon: <GrTechnology className="inline-block mr-2" />,
  },
];

interface SlugDropDownInterface {
  name?: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required: boolean;
}

const SlugDropdown: React.FC<SlugDropDownInterface> = ({
  errors,
  id,
  register,
  required = true,
  name = "Category",
}) => {
  return (
    <div className="relative inline-block text-left w-[100px]">
      <select
        id={id}
        className="block w-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        {...register(id, { required })}
      >
        <option value="" disabled selected>
          {name}
        </option>
        {catArray.map((item) => (
          <option key={item.label} value={item.label}>
            {item.icon}
            {item.label}
          </option>
        ))}
      </select>
      {errors[id] && (
        <p className="text-red-500 text-xs mt-1">{`${name} is required`}</p>
      )}
    </div>
  );
};

export default SlugDropdown;
