import ProfileAvatar from "@/components/ProfileAvatar";
import { Button } from "@/components/ui/button";
import React from "react";

const Testimonials = () => {
  return (
    <div className="space-y-[25px] md:space-y-[32px]">
      <h1 className="text-[20px] md:text-[26px] font-bold md:font-semibold tracking-wide">
        What clients say
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow space-y-8 rounded-lg">
          <p className="text-[14px] tracking-wide font-semibold">
            Kayode works in a very timely manner and always ensures that you are
            fully satisfied with the results!
          </p>
          <div className="flex gap-3 items-center">
            <ProfileAvatar
              name="Frank Dery"
              className=" size-[50px] rounded-[10px]"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiAaKk2O5kUsjqJP01k24EW93PnSHjuJLTA&s"
            />
            <div>
              <h1 className="text-[14px] font-semibold">Frank Denry</h1>
              <p className="text-[12px] opacity-70">Founder of Acme INC.</p>
            </div>
          </div>
        </div>
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
