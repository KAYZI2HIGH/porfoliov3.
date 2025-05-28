"use client";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-[30px] md:text-[40px] font-semibold tracking-wide text-nowrap">
              Hello! I&apos;m Kayode
            </h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-5 md:items-center">
              <h1 className="text-[30px] md:text-[40px] font-semibold tracking-wide text-[#5D48E8] dark:text-[#AFA3FF]">
                Fullstack Developer
              </h1>
              <div className="py-[10px] pr-4 pl-[10px] flex gap-2 justify-center items-center w-fit h-fit bg-[#F7F7F8] dark:bg-[#282828] rounded-[10px] shadow border border-black/10 text-black/60 dark:text-white/60">
                <MapPin className="size-5 " />
                Lagos.
              </div>
            </div>
          </div>
          <div className="relative w-[100px] aspect-square max-sm:hidden">
            <Image
              src={`/logo/${theme === "dark" ? "light" : "dark"}-mode.svg`}
              fill
              alt="logo"
            />
          </div>
        </div>
      </div>
      <p className="opacity-60">
        Fullstack developer with a strong frontend focus, crafting intuitive
        user experiences and performant SaaS applications using modern web
        technologies and scalable, maintainable architecture.
      </p>
      <div className="flex flex-col sm:flex-row sm:w-fit w-full gap-4">
        <Button
          className="!bg-black/15 dark:!bg-white/15 text-black dark:text-white hover:opacity-90 font-semibold tracking-wide sm:px-5"
          asChild
        >
          <Link href={"/about"}>About</Link>
        </Button>
        <Button
          variant={"outline"}
          asChild
        >
          <Link
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={20} />
            Resume
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
