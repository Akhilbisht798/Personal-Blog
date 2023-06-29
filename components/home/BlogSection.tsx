import { FC } from "react";
import ArticleCard from "../ArticleCard";
import { ArticleCardProps } from "../ArticleCard";

type BlogSectionType = {
  articles: ArticleCardProps[];
};

const BlogSection: FC<BlogSectionType> = ({ articles }) => {
  return (
    <div className=" flex flex-col gap-[16px] bg-[#F2F4F7] lg:py-[80px] lg:px-[250px] sm:py-[60px] sm:px-[37px] py-[40px] justify-center items-center md:gap[100px] ">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          date={article.date}
          description={article.description}
          image={article.image}
        />
      ))}
    </div>
  );
};

export default BlogSection;
