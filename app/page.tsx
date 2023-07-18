"use client";

import { ArticleCardProps } from "@/components/ArticleCard";
import BlogSection from "@/components/home/BlogSection";
import HeroSection from "@/components/home/HeroSection";

async function getData() {
  const blog = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const data = await blog.json();
  return data;
}

export default async function Home() {
  const data: ArticleCardProps[] = await getData();
  return (
    <>
      <HeroSection
        heading="Welcome To My World."
        description="A programming-focused blog where I share my insights and learnings, helping others on their coding journey while documenting my own progress."
      />
      <BlogSection articles={data} />
      {/* TODO: Implement Batch fetching only 5 post at first and remaining if your scroll or show more button. */}
    </>
  );
}
