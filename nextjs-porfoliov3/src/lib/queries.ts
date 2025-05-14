export const FAVOURITE_PROJECT_QUERY = `*[_type == "projects" && isFavourite == true]| order(_createdAt desc){_id, name, description, category, about, keyFeatures, projectDetails, image, githubUrl, url, techStack, isFavourite}`;

export const ALL_PROJECT_QUERY = `*[_type == "projects"]|order(isFavourite desc, _createdAt desc){_id, name, description, category, about, keyFeatures, projectDetails, image, githubUrl, url, techStack, isFavourite}`;

export const PROJECT_QUERY_BY_ID = `*[_type == "projects" && _id == $id]{_id, name, description, category, about, keyFeatures, projectDetails, image, githubUrl, url, techStack, isFavourite}[0]`;

export const BLOGS_QUERY = `*[_type == "blog"]{title, slug, author, publishedAt, image, body, topic}`;

export const BLOG_QUERY_BY_SLUG = `*[_type == "blog" && slug.current == $slug]{title, slug, author, publishedAt, image, body, topic}[0]`;

export const ABOUT_QUERY = `*[_type == "about"]{name, profession, introduction, professionalSummary, image, tools, experience, education}`