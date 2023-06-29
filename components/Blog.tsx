import { FC } from "react";
import Image from "next/image";
import HeroSection from "./home/HeroSection";

type BlogType = {
  content: string;
  title: string;
  date: Date;
  image: string;
};

const Blog: FC<BlogType> = ({ content, title, date, image }) => {
  return (
    <>
      <HeroSection
        heading={title}
        description={date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      />
      <div className=" flex flex-col items-center justify-center gap-[10px] lg:px-[250px] lg:pb-[100px] md:px-[37px] md:pb-[80px] p-5  bg-white">
        <div className=" max-w-full h-auto rounded-md">
          <Image width={1200} height={500} src={image} alt="" />
        </div>
        <div className="text-gray-800 text-base font-graphik font-normal leading-6 flex lg:w-[680px] md:w-[500px] flex-col flex-shrink-0">
          {content}
        </div>
      </div>
    </>
  );
};

export default Blog;
