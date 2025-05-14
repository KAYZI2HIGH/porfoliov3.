import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/constant";
import { ChevronLeft, ExternalLink, FileSearch } from "lucide-react";
import Image from "next/image";
import React, { JSX } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props): Promise<JSX.Element> {
  const {id} = await params
  const projectDetials = projects[0];
  return (
    <div className="flex flex-col gap-[40px] sm:gap-[80px]">
      <div className="space-y-10 md:space-y-[80px]">
        <div className="space-y-1">
          <Button variant={"link"}>
            <ChevronLeft /> Back to List {id}
          </Button>
          <Separator />
        </div>
        <div className="space-y-5">
          <h1 className="text-[32px] font-semibold tracking-wide">
            {projectDetials.name}
          </h1>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div>
              <p className="opacity-70">Date</p>
              <p className="text-[14px] font-semibold tracking-wider mt-1">
                2023 - 2024
              </p>
            </div>
            <div>
              <p className="opacity-70">Service</p>
              <p className="text-[14px] font-semibold tracking-wider  mt-1">
                UI/UX Design + Frontend
              </p>
            </div>
            <div>
              <p className="opacity-70">Client</p>
              <p className="text-[14px] font-semibold tracking mt-1">
                VirtusLab
              </p>
            </div>
          </div>
          <Button className="bg-black/15 dark:bg-white/15 text-black dark:text-white !py-6 !px-5 hover:opacity-90">
            Live Preview <ExternalLink />
          </Button>
        </div>
      </div>
      <div className="w-full aspect-video relative rounded-[12px] overflow-hidden border-2 border-black/40 dark:border-white/40 shadow-md">
        <Image
          src={"/images/flavourfulmenus/home.png"}
          fill
          alt="Project Image"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-[26px] tracking-wider font-semibold">
            About the Project.
          </h1>
          <p className="opacity-60">{projectDetials.about}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[26px] tracking-wider font-semibold">
            Key Features
          </h1>
          <ul className="space-y-3 pl-8">
            {projectDetials.keyFeatures.map((feature, index) => (
              <li
                className="opacity-60 list-disc"
                key={index}
              >
                <p> {feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          {" "}
          {/* Container with explicit bg */}
          <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100">
            Technical Stack
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3  gap-4">
            {projectDetials.techStack.map((tech, index) => (
              <div
                key={index}
                className="
          relative h-32 rounded-xl overflow-hidden
          border border-gray-200 dark:border-gray-700
          transition-all duration-700 ease-out
          group hover:shadow-xl
          hover:shadow-blue-400/20 dark:hover:shadow-purple-400/20
          bg-white/60 dark:bg-gray-900/30
        "
              >
                {/* Dual-mode gradient overlay */}
                <div
                  className="
          absolute inset-0 
          bg-[conic-gradient(at_top_left,transparent_0%,rgba(200,200,255,0.1)_20%,transparent_40%)]
          dark:bg-[conic-gradient(at_top_left,transparent_0%,rgba(150,100,255,0.1)_20%,transparent_40%)]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
                />

                {/* Tech initial (light/dark aware) */}
                <div
                  className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/2
          text-4xl opacity-20 dark:opacity-30
          text-gray-700 dark:text-gray-300
          transition-all duration-1000
          group-hover:opacity-100 dark:group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-[55%] group-hover:text-blue-600 dark:group-hover:text-purple-400 z-40
        "
                >
                  {tech.icon !== "" ?
                    <Image
                      src={tech.icon}
                      height={40}
                      width={40}
                      alt={tech.name}
                    />
                  : <FileSearch />}
                </div>

                {/* Glass card content */}
                <div
                  className="
          absolute inset-0 backdrop-blur-sm 
          p-4 flex flex-col justify-end
          transition-all duration-500
          bg-white/70 dark:bg-gray-800/10
          group-hover:bg-white/90 dark:group-hover:bg-gray-800/90
        "
                >
                  <span
                    className="
            font-medium 
            text-gray-800 dark:text-gray-200
            transition-all duration-300
            group-hover:translate-x-1 
            group-hover:text-blue-600 dark:group-hover:text-purple-400
          "
                  >
                    {tech.name}
                  </span>

                  {/* Animated underline */}
                  <div
                    className="
            h-px bg-gray-200 dark:bg-gray-700 mt-2 w-full
            relative overflow-hidden
            before:absolute before:left-0 before:top-0 before:h-full before:w-full
            before:bg-gradient-to-r before:from-blue-500 before:to-blue-600 dark:before:from-purple-500 dark:before:to-purple-600
            before:scale-x-0 before:origin-left
            before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.65,0,0.35,1)]
            group-hover:before:scale-x-100
          "
                  />
                </div>

                {/* Floating particles (mode-aware) */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="
              absolute rounded-full 
              bg-blue-400/40 dark:bg-purple-400/40
              transition-all duration-1000
              opacity-0 group-hover:opacity-100
            "
                    style={{
                      width: `${Math.random() * 6 + 4}px`,
                      height: `${Math.random() * 6 + 4}px`,
                      top: `${Math.random() * 30 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                      animation: `float ${Math.random() * 3 + 3}s infinite ease-in-out ${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};