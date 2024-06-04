import { IconType } from "react-icons";

export type SafeCategory = {
  title: string;
} & {
  icon: IconType;
};

// export type SafePost ={

// }

// types.ts (create a new file or add this to an existing types file)
export interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  hashedPassword: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}
