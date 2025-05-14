import ProjectDescription from "@/components/sections/Projects/ProjectDescription";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PROJECT_QUERY_BY_ID } from "@/lib/queries";
import { option } from "@/lib/Revalidate";
import { Project } from "@/lib/type";
import { client } from "@/sanity/client";
import {  ExternalLink } from "lucide-react";
import Swiper from '@/components/sections/Projects/Swiper'
import Link from "next/link";
import React, { JSX } from "react";
import BackButton from "@/components/custom-ui/BackButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props): Promise<JSX.Element> {
  const projectDetials = await client.fetch(
    PROJECT_QUERY_BY_ID,
    await params,
    option
  ) as Project

  return (
    <div className="flex flex-col gap-[40px] sm:gap-[80px]">
      <div className="space-y-10 md:space-y-[80px]">
        <div className="space-y-1">
          <BackButton href="/projects">Back to List</BackButton>
          <Separator />
        </div>

        <div className="space-y-5">
          <h1 className="text-[32px] font-semibold tracking-wide">
            {projectDetials.name}
          </h1>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div>
              <p className="opacity-70">Date</p>
              <p className="text-[14px] font-semibold tracking-wider mt-1">
                2023 - 2024
              </p>
            </div>
            <div>
              <p className="opacity-70">Service</p>
              <p className="text-[14px] font-semibold tracking-wider mt-1">
                UI/UX Design + Frontend
              </p>
            </div>
            <div>
              <p className="opacity-70">Client</p>
              <p className="text-[14px] font-semibold tracking mt-1">
                VirtusLab
              </p>
            </div>
          </div>

          <Button
            className="bg-black/15 dark:bg-white/15 text-black dark:text-white !py-6 !px-5 hover:bg-black/20 dark:hover:bg-white/25 transition-all duration-300 ease-in-out"
            asChild
          >
            <Link href={projectDetials.url}>
              Live Preview <ExternalLink />
            </Link>
          </Button>
        </div>
      </div>

      <div className="w-full aspect-video relative rounded-[12px] overflow-hidden border-2 border-black/40 dark:border-white/40 shadow-md">
        <Swiper images={projectDetials.image} />
      </div>

      <ProjectDescription projectDetials={projectDetials} />
      <Separator />
    </div>
  );
}
