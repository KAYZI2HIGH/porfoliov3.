import { Separator } from "@/components/ui/separator";
import Hero from "@/components/sections/Home/hero";
import FavouriteProjects from "@/components/sections/Home/FavouriteProjects";
import Services from "@/components/sections/Home/Services";
import Testimonials from "@/components/sections/Home/Testimonials";
import Blogs from "@/components/sections/Home/Blogs";



export default function Home() {
  return (
    <div className="flex flex-col gap-[50px] md:gap-[80px]">
      <Hero/>
      <FavouriteProjects/>
      <Services/>
      <Testimonials/>
      <Blogs/>
      <Separator />
    </div>
  );
}
