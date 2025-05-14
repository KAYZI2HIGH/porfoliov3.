import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/constant";
import React from "react";

const Services = () => {
  return (
    <div className="space-y-[25px] md:space-y-[32px]">
      <h1 className="text-[20px] md:text-[26px] font-bold md:font-semibold tracking-wide">
        Services
      </h1>
      <div className="flex flex-col gap-5">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex gap-3 items-center justify-between"
          >
            <div className="flex justify-center items-center gap-3">
              <div className="size-10 flex justify-center items-center rounded-full bg-[#F7F7F8] dark:bg-[#282828] text-black/60 dark:text-white/60">
                <service.icon size={20} />
              </div>
              <div>
                <h1 className="text-[13px] md:text-[14px] tracking-wide font-semibold text-nowrap">
                  {service.title}
                </h1>
                <h3 className="text-black/60 dark:text-white/60 text-[14px] sm:hidden">
                  {service.priceRange}
                </h3>
              </div>
            </div>
            <Separator className="flex-1 hidden sm:flex" />
            <h3 className="text-black/60 dark:text-white/60 text-[14px] hidden sm:flex">
              {service.priceRange}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
