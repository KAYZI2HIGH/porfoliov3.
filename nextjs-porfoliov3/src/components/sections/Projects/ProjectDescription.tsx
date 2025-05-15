import { Project } from "@/lib/type";
import { Calendar, FileSearch, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectDescription = ({
  projectDetials,
}: {
  projectDetials: Project;
}) => {
  return (
    <>
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
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100">
            Technical Stack
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {projectDetials.techStack.map((tech, index) => (
              <div
                key={index}
                className="relative h-32 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-700 ease-out group hover:shadow-xl hover:shadow-blue-400/20 dark:hover:shadow-purple-400/20 bg-white/60 dark:bg-gray-900/30"
              >
                <div className="absolute inset-0 bg-[conic-gradient(at_top_left,transparent_0%,rgba(200,200,255,0.1)_20%,transparent_40%)] dark:bg-[conic-gradient(at_top_left,transparent_0%,rgba(150,100,255,0.1)_20%,transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/2 text-4xl opacity-20 dark:opacity-30 text-gray-700 dark:text-gray-300 transition-all duration-1000 group-hover:opacity-100 dark:group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-[55%] group-hover:text-blue-600 dark:group-hover:text-purple-400 z-40">
                  {tech.icon ?
                    <Image
                      src={tech.icon}
                      height={40}
                      width={40}
                      alt={tech.name}
                    />
                  : <FileSearch />}
                </div>

                <div className="absolute inset-0 backdrop-blur-sm p-4 flex flex-col justify-end transition-all duration-500 bg-white/70 dark:bg-gray-800/10 group-hover:bg-white/90 dark:group-hover:bg-gray-800/90">
                  <span className="font-medium text-gray-800 dark:text-gray-200 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-purple-400">
                    {tech.name}
                  </span>

                  <div className="h-px bg-gray-200 dark:bg-gray-700 mt-2 w-full relative overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-600 dark:before:from-purple-500 dark:before:to-purple-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:before:scale-x-100" />
                </div>

                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-blue-400/40 dark:bg-purple-400/40 transition-all duration-1000 opacity-0 group-hover:opacity-100"
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

      <div className="pb-7 border-b flex flex-col gap-4 mt-5">
        <h1 className="capitalize text-[23px] font-semibold tracking-wide">
          Project Details ({projectDetials.category})
        </h1>
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-4 w-fit">
            <Calendar size={18} />
            <div className="flex flex-col gap-1 font-medium">
              <p className="text-gray-500 dark:text-gray-300">Duration</p>
              <p className="font-semibold">
                {projectDetials.projectDetails.duration}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 w-fit">
            <Users size={18} />
            <div className="flex flex-col gap-1 font-medium">
              <p className="text-gray-500 dark:text-gray-300">Team Size</p>
              <p className="font-semibold">
                {projectDetials.projectDetails.teamSize} Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-4">
        <h1 className="text-[23px] font-semibold tracking-wide">
          Project Outcomes
        </h1>
        <ul className="space-y-3 pl-8">
          {projectDetials.projectDetails.outcomes.map((outcome, index) => (
            <li
              key={index}
              className=" list-disc "
            >
              <p className="opacity-60"> {outcome}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectDescription;
