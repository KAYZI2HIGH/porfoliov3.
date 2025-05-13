'use client'
import { type Education } from "@/lib/type";
import { urlFor } from "@/lib/utils";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import React, { Fragment } from "react";

const Education = ({ ABOUTME }: { ABOUTME: SanityDocument }) => {
  return (
    <div className="space-y-[25px] md:space-y-[32px]">
      <h1 className="text-[20px] md:text-[26px] font-bold md:font-semibold tracking-wide">
        Experience
      </h1>
      {ABOUTME.education.map((education: Education, idx: number) => (
        <Fragment key={idx}>
          <div
            className="
       flex gap-6 items-start
       relative p-6 rounded-xl
       transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
       hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]
       hover:bg-white/70 dark:hover:bg-[#282828]/60
       before:absolute before:inset-0 before:rounded-xl
       before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.8),transparent_60%)]
       dark:before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_70%)]
       before:opacity-0 hover:before:opacity-100
       before:transition-opacity before:duration-500
       after:absolute after:inset-0 after:rounded-xl
       after:border after:border-transparent
       hover:after:border-gray-200/50 dark:hover:after:border-white/15
       after:transition-all after:duration-500
       group
     "
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--mouse-x",
                `${e.clientX - rect.left}px`
              );
              e.currentTarget.style.setProperty(
                "--mouse-y",
                `${e.clientY - rect.top}px`
              );
            }}
          >
            {/* Logo with dual-mode 3D effect */}
            <div
              className="
       w-[64px] aspect-square relative rounded-[10px] overflow-hidden
       transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
       group-hover:rotate-[5deg] group-hover:scale-105
       shadow-lg group-hover:shadow-xl
       bg-white/90 dark:bg-[#383838]
     "
            >
              <Image
                src={urlFor(education.schoolLogo)?.url() || ''}
                alt={education.schoolName}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-95"
              />
            </div>

            {/* Content with mode-aware animations */}
            <div className="w-full space-y-3 relative z-10">
              <div className="space-y-1">
                <p
                  className="
           text-[16px] font-bold tracking-wide
           transition-transform duration-500
           group-hover:translate-x-1
           text-gray-900 dark:text-gray-100
         "
                >
                  {education.schoolName}
                </p>
                <p
                  className="
           text-[14px] font-semibold tracking-wide
           transition-all duration-500 delay-75
           group-hover:translate-x-1 opacity-60 group-hover:opacity-80 dark:group-hover:opacity-80
         "
                >
                  {education.program}
                </p>
                <p
                  className="
           text-[14px] font-semibold tracking-wide
           transition-all duration-500 delay-100
           group-hover:translate-x-1 opacity-60
           group-hover:opacity-90 dark:group-hover:opacity-80
         "
                >
                  {education.duration}
                </p>
              </div>
              <p
                className="
         font-semibold
         transition-all duration-500 delay-150
         group-hover:translate-x-1
         text-gray-700 dark:text-gray-300
       "
              >
                {education.description}
              </p>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Education;
