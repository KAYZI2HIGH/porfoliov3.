import Education from "@/components/sections/About/Education";
import Experience from "@/components/sections/About/Experience";
import Hero from "@/components/sections/About/Hero";
import Tools from "@/components/sections/About/Tools";
import { Separator } from "@/components/ui/separator";
import { ABOUT_QUERY } from "@/lib/queries";
import { option } from "@/lib/Revalidate";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const AboutPage = async() => {
  const aboutArray = await client.fetch<SanityDocument[]>(ABOUT_QUERY, {}, option)
  const aboutMe = aboutArray[0]
  return (
    
    <section className="flex flex-col gap-[40px] md:gap-[80px]">
      <Hero ABOUTME={aboutMe}/>
      <Tools ABOUTME={aboutMe} />
      <Experience ABOUTME={aboutMe}/>
      <Education ABOUTME={aboutMe}/>
      <Separator />
    </section>
  );
};

export default AboutPage;
