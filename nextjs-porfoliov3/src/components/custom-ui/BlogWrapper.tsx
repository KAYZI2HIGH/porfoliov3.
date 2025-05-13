import { BLOGS_QUERY } from "@/lib/queries";
import { option } from "@/lib/Revalidate";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import React from "react";
import BlogCard from "./BlogCard";

const BlogWrapper = async ({
  type,
}: {
  type: "all-blog" | "showcase-blog";
}) => {
  const blogs = await client.fetch<SanityDocument[]>(BLOGS_QUERY, {}, option);
  return (
    <div className="space-y-[25px] md:space-y-[32px]">
      {blogs.map((blog, idx) => {
        if (type === "all-blog") {
          return (
            <BlogCard
              date={blog.publishedAt}
              title={blog.title}
              imgSrc={blog.image}
              slug={blog.slug.current}
              key={idx}
            />
          );
        } else if (type === "showcase-blog") {
          if (idx <= 1) {
            return (
              <BlogCard
                date={blog.publishedAt}
                title={blog.title}
                imgSrc={blog.image}
                slug={blog.slug.current}
                key={idx}
              />
            );
          }
        }
      })}
    </div>
  );
};

export default BlogWrapper;
