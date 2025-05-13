import { SanityImageObject } from "@sanity/image-url/lib/types/types";

interface Education {
  schoolLogo: SanityImageObject,
  schoolName: string,
  program: string,
  duration: string,
  description: string
}

interface Experience {
  companyLogo: SanityImageObject;
  companyName: string,
  role: string,
  duration: string,
  description: string
}

interface Tools {
  imageUrl: string,
  name: string
}