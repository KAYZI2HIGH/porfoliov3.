import BlogWrapper from "@/components/custom-ui/BlogWrapper";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const Blogs = () => {
  return (
    <div className="space-y-[25px] md:space-y-[32px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[20px] md:text-[26px] font-bold md:font-semibold tracking-wide">
          Blogs
        </h1>
        <Button
          variant={"link"}
          className="opacity-60 hover:opacity-90 transition duration-200 ease-in-out cursor-pointer max-sm:underline max-sm:underline-offset-4"
          asChild
        >
          <Link href={"/blogs"}>
            All Blogs <ArrowRight className="hidden sm:flex" />
          </Link>
        </Button>
      </div>
      <Suspense
        fallback={<Skeleton className=" w-full aspect-video rounded-[10px]" />}
      >
        <BlogWrapper type="showcase-blog" />
      </Suspense>
    </div>
  );
};

export default Blogs;
