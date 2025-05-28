'use client'
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const router = useRouter();
  return (
    <Button
      variant={"link"}
      className="!px-0"
      onClick={() => router.replace(href)}
    >
      <ChevronLeft /> {children}
    </Button>
  );
};

export default BackButton;
