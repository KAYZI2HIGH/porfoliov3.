import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProjectSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[38px] md:gap-6 mx-auto">
      <Skeleton className="w-full aspect-video rounded-[10px]" />
      <Skeleton className="w-full aspect-video rounded-[10px]" />
    </div>
  );
};

export default ProjectSkeleton;
