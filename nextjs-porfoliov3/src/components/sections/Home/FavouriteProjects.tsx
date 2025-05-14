import ProjectsGridWrapper from "@/components/custom-ui/ProjectsGridWrapper";
import ProjectSkeleton from "@/components/custom-ui/ProjectSkeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const FavouriteProjects = () => {
  return (
    <div className="space-y-[32px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[20px] md:text-[26px] font-bold md:font-semibold tracking-wide">
          Favourite Work
        </h1>
        <Button
          variant={"link"}
          className="opacity-60 hover:opacity-90 transition duration-200 ease-in-out cursor-pointer max-sm:underline max-sm:underline-offset-4"
          asChild
        >
          <Link href={"/projects"}>
            All Projects <ArrowRight className="hidden sm:flex"/>
          </Link>
        </Button>
      </div>
      <Suspense fallback={<ProjectSkeleton/>}>
        <ProjectsGridWrapper type="FavouriteProjects" />
      </Suspense>
    </div>
  );
};

export default FavouriteProjects;
