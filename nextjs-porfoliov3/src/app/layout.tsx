import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ContactDetails from "@/components/sections/Home/ContactDetails";
import Footer from "@/components/sections/Home/Footer";
import { FloatingDockWithLink } from "@/components/custom-ui/FloatingDockWithLinks";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kayode Portfolio",
    default: "Kayode Portfolio",
  },
  description:
    "Showcasing projects and expertise in frontend and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${mulish.className} antialiased overflow-x-hidden `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="w-screen bg-[#eeeeee] dark:bg-black py-4 px-3 text-black dark:text-white relative">
            <div className="w-full  max-w-[800px] h-full mx-auto bg-white dark:bg-[#1A1A1A]/70 border border-black/10 shadow rounded-[12px] px-[20px] md:px-[64px] pt-[40px] pb-[20px] md:pt-[100px] md:pb-[40px] relative">
              {children}
              <ContactDetails />
              <Footer />
              <FloatingDockWithLink className="fixed -top-1/2 sm:top-0 translate-y-1/6 sm:-bottom-1/2 sm:-translate-y-[38%] -right-[40%] sm:right-0 sm:left-1/2 sm:-translate-x-1/2 " />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
