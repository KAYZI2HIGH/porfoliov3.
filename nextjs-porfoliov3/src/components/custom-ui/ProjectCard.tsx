import { urlFor } from "@/lib/utils";
import { ArrowRight, Github, Link2 } from "lucide-react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }: { project: SanityDocument }) => {
  const projectImageUrl =
    project.image ?
      urlFor(project.image[0])?.width(550).height(310).url()
    : null;

  return (
    <div className="w-full space-y-3 group">
      {/* Image Container with Hover Zoom */}
      <div
        className="
        p-[10px] bg-black/10 dark:bg-white/10 rounded-[20px]
        transition-all duration-500 ease-out
        group-hover:bg-black/20 dark:group-hover:bg-white/20
        group-hover:shadow-lg dark:group-hover:shadow-gray-800/30
      "
      >
        {projectImageUrl && (
          <div
            className="
            relative overflow-hidden aspect-video w-full rounded-[12px]
            transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-[1.03]
          "
          >
            <Image
              src={projectImageUrl}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
                object-cover transition-transform duration-1000 ease-out
                group-hover:scale-[1.08]
              "
            />
            {/* Subtle Overlay */}
            <div
              className="
              absolute inset-0 bg-gradient-to-t from-black/10 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-500
            "
            />
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="px-2 space-y-1">
        <div className="flex justify-between items-center">
          <h3
            className="
            font-medium transition-all duration-300
            group-hover:text-gray-900 dark:group-hover:text-gray-100
          "
          >
            {project.name}
          </h3>
          <div className="flex gap-3">
            <Link
              href={project.githubUrl}
              className="
              opacity-70 hover:opacity-100 transition-opacity
              hover:-translate-y-0.5 transform duration-300
            "
            >
              <Github size={16} />
            </Link>
            <Link
              href={project.url}
              className="
              opacity-70 hover:opacity-100 transition-opacity
              hover:-translate-y-0.5 transform duration-300 delay-75
            "
            >
              <Link2 size={16} />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p
            className="
            opacity-60 capitalize transition-all duration-300
            group-hover:opacity-80 group-hover:translate-x-0.5
          "
          >
            {project.category}
          </p>
          <Link
            href={`/projects/${project?._id}`}
            className="
              opacity-60 hover:opacity-100 transition-all duration-300
              flex gap-1 text-[14px] items-center
              group-hover:gap-1.5
            "
          >
            More Details{" "}
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              size={17}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
