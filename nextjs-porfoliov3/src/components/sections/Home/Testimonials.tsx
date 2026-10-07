import ProfileAvatar from "@/components/ProfileAvatar";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/utils";
import { SanityDocument } from "next-sanity";
import React from "react";

const Testimonials = ({ testimonials }: { testimonials: SanityDocument[] }) => {
  return (
    <div className="space-y-[25px] md:space-y-[32px]">
      <h1 className="text-[20px] md:text-[26px] font-bold md:font-semibold tracking-wide">
        What people say
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {testimonials.slice(0, 4).map((testimonial) => (
          <div
            key={testimonial._id}
            className="p-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow space-y-8 rounded-lg"
          >
            <p className="text-[14px] tracking-wide font-semibold">
              {testimonial.quote}
            </p>
            <div className="flex gap-3 items-center">
              <ProfileAvatar
                name={testimonial.name}
                className=" size-[50px] rounded-[10px]"
                image={
                  testimonial.image ?
                    urlFor(testimonial.image).width(100).height(100).url()
                  : undefined
                }
              />
              <div>
                <h1 className="text-[14px] font-semibold">
                  {testimonial.name}
                </h1>
                <p className="text-[12px] opacity-70">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant={"outline"}
        className="w-full py-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow"
      >
        Load More
      </Button>
    </div>
  );
};

export default Testimonials;
