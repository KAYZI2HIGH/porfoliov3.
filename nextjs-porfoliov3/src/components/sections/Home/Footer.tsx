import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="space-y-7 mt-[50px] md:mt-[80px]">
      <Separator />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-[14px] font-semibold flex items-center gap-2">
          <span className="opacity-70">Next.js</span> •{" "}
          <span className="opacity-70">Python</span> •{" "}
          <span className="opacity-70">UI/UX</span> • Kayzi © 2024{" "}
        </p>
        <Button
          variant={"link"}
          asChild
          className="underline opacity-65 hover:opacity-100 transition duration-200 ease-in-out"
        >
          <Link href={"/contact"}>Contact Me</Link>
        </Button>
      </div>
     
    </div>
  );
}

export default Footer