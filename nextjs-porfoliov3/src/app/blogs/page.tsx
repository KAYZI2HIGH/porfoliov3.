import BlogWrapper from "@/components/custom-ui/BlogWrapper";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs - Kayode Portfolio",
  description:
    "Logging my journey through lines of code, persistent bugs, breakthrough moments, and everything in between.",
};

const page = () => {
  return (
    <section className="flex flex-col gap-[40px] sm:gap-[50px] w-full">
      <div>
        <h1 className="text-[32px] sm:text-[40px] font-semibold tracking-wide ">
          Blogs
        </h1>
        <p className="opacity-60 mt-1">
          Logging my journey through lines of code, persistent bugs,
          breakthrough moments, and everything in between.
        </p>
      </div>
      <Suspense
        fallback={<Skeleton className=" w-full aspect-video rounded-[10px]" />}
      >
        <BlogWrapper type="all-blog" />
      </Suspense>
      <Separator />
    </section>
  );
};

export default page;
