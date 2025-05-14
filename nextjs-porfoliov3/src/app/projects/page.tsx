import ProjectsGridWrapper from '@/components/custom-ui/ProjectsGridWrapper';
import ProjectSkeleton from '@/components/custom-ui/ProjectSkeleton';
import { Separator } from '@/components/ui/separator';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <section className="flex flex-col gap-[40px] sm:gap-[50px] w-full">
      <div>
        <h1 className="text-[32px] sm:text-[40px] font-semibold tracking-wide ">
          Projects
        </h1>
        <p className="opacity-60 mt-1">
          Explore modern web experiences that turn bold ideas into fast,
          functional, and responsive products.
        </p>
      </div>
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectsGridWrapper type="AllProjects" />
      </Suspense>
      <Separator/>
    </section>
  );
}

export default page