import { urlFor } from '@/lib/utils';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image';
import React from 'react'

const Hero = ({ABOUTME}: {ABOUTME: SanityDocument}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10">
      <div className="w-full space-y-6">
        <div>
          <h1 className="text-[30px] md:text-[40px] font-semibold tracking-wide capitalize">
            {ABOUTME.name}
          </h1>
          <h1 className="text-[30px] md:text-[40px] font-semibold tracking-wide opacity-60 capitalize">
            {ABOUTME.profession}
          </h1>
        </div>
        <p className="opacity-60">
          {ABOUTME.introduction} <br />
          <br /> {ABOUTME.professionalSummary}
        </p>
      </div>
      <div className="w-full max-w-[300px] sm:w-[300px] aspect-square h-fit rounded-[10px] shadow border-2 border-black/30 dark:border-white/30 relative overflow-hidden mx-auto">
        <Image
          src={urlFor(ABOUTME.image)?.url() || ''}
          fill
          alt={ABOUTME.name}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Hero