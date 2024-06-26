import { cookies } from "next/headers";

export const dynamic = "force-dynamic";
const page = async () => {
  return <div>page</div>;
};
export default page;
