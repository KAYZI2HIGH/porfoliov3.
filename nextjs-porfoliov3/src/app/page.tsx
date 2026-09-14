import { Separator } from "@/components/ui/separator";
import Hero from "@/components/sections/Home/hero";
import FavouriteProjects from "@/components/sections/Home/FavouriteProjects";
import Testimonials from "@/components/sections/Home/Testimonials";
import Blogs from "@/components/sections/Home/Blogs";
import { client } from "@/sanity/client";
import { ABOUT_QUERY } from "@/lib/queries";
import { option } from "@/lib/Revalidate";
import Tools from "@/components/sections/About/Tools";
import Experience from "@/components/sections/About/Experience";
import Education from "@/components/sections/About/Education";
import { SanityDocument } from "next-sanity";



export default async function Home() {
  const aboutArray = await client.fetch<SanityDocument[]>(
      ABOUT_QUERY,
      {},
      option
    );
    const aboutMe = aboutArray[0];
  return (
    <div className="flex flex-col gap-[50px] md:gap-[80px]">
      <Hero/>
      <FavouriteProjects />
      <Tools ABOUTME={aboutMe} />
      <Experience ABOUTME={aboutMe} />
      <Education ABOUTME={aboutMe} />
      <Separator/>
      <Blogs/>
      <Testimonials/>
      <Separator />
    </div>
  );
}
