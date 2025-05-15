import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import { ModeToggle } from "../ModeToggle";
import { cn } from "@/lib/utils";
import { Briefcase, FileText, GraduationCap } from "lucide-react";

export function FloatingDockWithLink({className}: {className: string}) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Projects",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Mode Toggler",
      icon: (
        <ModeToggle/>
      ),
      href: "#",
    },
    {
      title: "Blogs",
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/KayziGucci",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/KAYZI2HIGH",
    },
  ];
  return (
    <div
      className={cn("flex items-center justify-center h-[35rem] w-full z-50", className)}
    >
      <FloatingDock items={links} />
    </div>
  );
}
