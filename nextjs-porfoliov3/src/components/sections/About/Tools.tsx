"use client";
import {type Tools } from "@/lib/type";
import { SanityDocument } from "next-sanity";
import Image from "next/image";

const Tools = ({ABOUTME}: {ABOUTME: SanityDocument}) => {
  return (
    <div className="space-y-[25px] md:space-y-[32px]">
      <h1 className="text-[20px] md:text-[26px] font-bold md:font-semibold tracking-wide">
        Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[4px] rounded-[12px] overflow-hidden cursor-default">
        {ABOUTME.tools.map((tool: Tools, idx: number) => (
          <div
            className="
        bg-[#F7F7F8] dark:bg-[#282828]/60 p-5 flex items-center gap-5
        relative overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.05)]
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-transparent before:via-transparent 
        before:to-white/20 dark:before:to-white/5
        before:opacity-0 hover:before:opacity-100
        before:transition-opacity before:duration-500
        after:absolute after:inset-0 
        after:bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.6),transparent_70%)] 
        dark:after:bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.15),transparent_80%)]
        after:opacity-0 hover:after:opacity-70 dark:hover:after:opacity-100
        after:transition-opacity after:duration-500
        group
        border border-transparent
        hover:border-gray-200/50 dark:hover:border-white/10
      "
            key={idx}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`
              );
              e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`
              );
            }}
          >
            <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-2px]">
              <Image
                src={tool.imageUrl}
                alt={tool.name}
                height={35}
                width={35}
                className="
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.15] group-hover:rotate-[5deg]
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
          "
              />
            </div>
            <h3
              className="
        relative z-10 font-semibold tracking-wide
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:translate-x-[4px]
        text-gray-800 dark:text-gray-200
      "
            >
              {tool.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
