import Education from "@/components/sections/About/Education";
import Experience from "@/components/sections/About/Experience";
import Hero from "@/components/sections/About/Hero";
import Tools from "@/components/sections/About/Tools";
import { Separator } from "@/components/ui/separator";
import { ABOUT_QUERY } from "@/lib/queries";
import { option } from "@/lib/Revalidate";
import { client } from "@/sanity/client";
import type { Metadata } from "next";
import { SanityDocument } from "next-sanity";

export const metadata: Metadata = {
  title: "About Me - Kayode Portfolio",
  description:
    "Founder of Linq — a real-time chat app that breaks language barrier. I've built apps using Next.js and worked with platforms like Baynedad and church communities, also teaming up with startups worldwide as a Frontend Lead.",
};

const AboutPage = async () => {
  const aboutArray = await client.fetch<SanityDocument[]>(
    ABOUT_QUERY,
    {},
    option
  );
  const aboutMe = aboutArray[0];
  return (
    <section className="flex flex-col gap-[40px] md:gap-[80px]">
      <Hero ABOUTME={aboutMe} />
      <Tools ABOUTME={aboutMe} />
      <Experience ABOUTME={aboutMe} />
      <Education ABOUTME={aboutMe} />
      <Separator />
    </section>
  );
};

export default AboutPage;
