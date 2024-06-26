import { cookies } from "next/headers";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}
export const dynamic = "force-dynamic";
const page = async () => {
  const cookie = await getCookieData();
  return <div>page</div>;
};
export default page;
