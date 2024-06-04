import { Poppins } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import HeaderLogged from "@/components/Header/HeaderLogged";
import { ThemeProvider } from "next-themes";
import ToastProvider from "@/providers/ToastProvider";
import Footer1 from "@/comp/Footer1";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" dir="" className={poppins.className}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ToastProvider />
        <ThemeProvider attribute="class">
          <HeaderLogged />
        </ThemeProvider>
        {children}
        <Footer1 />
      </body>
    </html>
  );
}
