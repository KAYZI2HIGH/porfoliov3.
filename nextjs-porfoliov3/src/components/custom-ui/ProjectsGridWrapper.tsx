import { ALL_PROJECT_QUERY, FAVOURITE_PROJECT_QUERY } from "@/lib/queries";
import { option } from "@/lib/Revalidate";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsGridWrapper = async ({
  type,
}: {
  type: "AllProjects" | "FavouriteProjects";
}) => {
  const QUERY =
    type === "FavouriteProjects" ? FAVOURITE_PROJECT_QUERY : ALL_PROJECT_QUERY;
  
  const projects = await client.fetch<SanityDocument[]>(QUERY, {}, option)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[38px] md:gap-6 mx-auto w-full">
      {projects.map((project, idx) => {
        if (type === 'AllProjects') {
          return (
            <ProjectCard
              key={idx}
              project={project}
            />
          );
        } else if (type === 'FavouriteProjects') {
          if (idx <= 3) {
            return (
              <ProjectCard
                key={idx}
                project={project}
              />
            );
          }
        }
      })}
    </div>
  );
};

export default ProjectsGridWrapper;
