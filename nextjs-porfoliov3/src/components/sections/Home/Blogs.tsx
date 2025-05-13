import BlogWrapper from "@/components/custom-ui/BlogWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const Blogs = () => {
  return (
    <div className="space-y-[25px] md:space-y-[32px]">
      <h1 className="text-[22px] md:text-[26px] font-bold md:font-semibold tracking-wide">
        Blog
      </h1>
      <Suspense
        fallback={<Skeleton className=" w-full aspect-video rounded-[10px]" />}
      >
        <BlogWrapper type="showcase-blog"/>
      </Suspense>
    </div>
  );
};

export default Blogs;
