export const FAVOURITE_PROJECT_QUERY = `*[_type == "projects" && isFavourite == true]| order(_createdAt desc){_id, name, description, category, about, keyFeatures, projectDetails, image, githubUrl, url, techStack, isFavourite}`;

export const ALL_PROJECT_QUERY = `*[_type == "projects"]{_id, name, description, category, about, keyFeatures, projectDetails, image, githubUrl, url, techStack, isFavourite}`;

export const BLOGS_QUERY = `*[_type == "blog"]{title, slug, author, publishedAt, image, body, topic}`;

export const ABOUT_QUERY = `*[_type == "about"]{name, profession, introduction, professionalSummary, image, tools, experience, education}`