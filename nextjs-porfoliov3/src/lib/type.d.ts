import { SanityImageObject } from "@sanity/image-url/lib/types/types";

interface Education {
  schoolLogo: SanityImageObject;
  schoolName: string;
  program: string;
  duration: string;
  description: string;
}

interface Experience {
  companyLogo: SanityImageObject;
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

interface Tools {
  imageUrl: string;
  name: string;
}

type TechStackItem = {
  icon: string;
  name: string;
};

type ProjectDetails = {
  duration: string;
  teamSize: number;
  outcomes: string[];
};

type Project = {
  name: string;
  description: string;
  category: "fullstack" | "frontend";
  service: string,
  client: string,
  about: string;
  keyFeatures: string[];
  projectDetails: ProjectDetails;
  image: SanityImageObject[];
  gitHubUrl: string;
  url: string;
  techStack: TechStackItem[];
};

type ProjectsArray = Project[];