import BlogSection from "@/components/home/BlogSection";
import HeroSection from "@/components/home/HeroSection";

async function getData() {}

export default function Home() {
  return (
    <>
      <HeroSection
        heading="Welcome To My World."
        description="A programming-focused blog where I share my insights and learnings, helping others on their coding journey while documenting my own progress."
      />
    </>
  );
}
