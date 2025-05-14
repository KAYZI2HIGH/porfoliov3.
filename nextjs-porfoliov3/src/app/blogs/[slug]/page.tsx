import BackButton from "@/components/custom-ui/BackButton";
import PortableText from "@/components/PortableText";
import { Separator } from "@/components/ui/separator";
import { BLOG_QUERY_BY_SLUG } from "@/lib/queries";
import { option } from "@/lib/Revalidate";
import { urlFor } from "@/lib/utils";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const blogDetails = await client.fetch<SanityDocument>(
    BLOG_QUERY_BY_SLUG,
    await params,
    option
  );

  return (
    <div className="flex flex-col gap-[40px] sm:gap-[80px]">
      <div className="space-y-10 md:space-y-[80px]">
        <div className="space-y-1">
          <BackButton href="/blogs">Back to List</BackButton>
          <Separator />
        </div>

        <div className="space-y-5">
          <h1 className="text-[32px] font-semibold tracking-wide">
            {blogDetails.title}
          </h1>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="opacity-70">Date</p>
              <p className="text-[14px] font-semibold tracking-wider mt-1">
                {new Date(blogDetails.publishedAt).toDateString()}
              </p>
            </div>

            <div>
              <p className="opacity-70">Author</p>
              <p className="text-[14px] font-semibold tracking mt-1">
                {blogDetails.author}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-video rounded-[12px] overflow-hidden">
        <Image
          src={urlFor(blogDetails.image)?.width(510).height(310).url() || ""}
          fill
          alt={blogDetails.title}
        />
      </div>
      <PortableText blocks={blogDetails.body} />
      <Separator />
    </div>
  );
};

export default page;
