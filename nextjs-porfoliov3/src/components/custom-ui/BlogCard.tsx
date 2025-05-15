import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/lib/utils";

const BlogCard = ({
  date,
  title,
  imgSrc,
  slug,
}: {
  date: number;
  title: string;
  imgSrc: string;
  slug: string;
}) => {
  const blogImageUrl =
    imgSrc ? urlFor(imgSrc)?.width(550).height(310).url() : null;
  return (
    <div className="flex flex-col sm:flex-row-reverse sm:items-center justify-between gap-8 sm:gap-10">
      {blogImageUrl && (
        <div className="aspect-video w-full sm:w-[350px] rounded-[12px] overflow-hidden relative">
          <Image
            src={blogImageUrl}
            fill
            alt="Blog Image"
            className="object-cover"
          />
        </div>
      )}
      <div className="space-y-4">
        <div className="space-y-[10px]">
          <p className="text-[14px] font-semibold opacity-60">
            {new Date(date).toDateString()}
          </p>
          <h3 className="text-[20px] sm:text-[23px] font-semibold tracking-wide">{title}</h3>
        </div>
        <div>
          <Separator />
          <Button
            variant={"link"}
            asChild
          >
            <Link href={`/blogs/${slug}`}>
              Read <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
