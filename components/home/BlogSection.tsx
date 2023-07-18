import { FC } from "react";
import ArticleCard from "../ArticleCard";
import { ArticleCardProps } from "../ArticleCard";
import { useRouter } from "next/navigation";
import Link from "next/link";

type BlogSectionType = {
  articles: ArticleCardProps[];
};

const BlogSection: FC<BlogSectionType> = ({ articles }) => {
  const router = useRouter();
  const onClickHandler = (id: String | undefined) => {
    console.log(id);
    router.push("http://localhost:3000/blog/" + id);
  };

  return (
    <div className=" flex flex-col gap-[16px] bg-[#F2F4F7] lg:py-[80px] lg:px-[250px] sm:py-[60px] sm:px-[37px] py-[40px] justify-center items-center md:gap[100px] ">
      {articles.map((article) => (
        <div
          key={article.id}
          data-id={article.id}
          onClick={() => onClickHandler(article.id)}
        >
          <ArticleCard
            key={article.id}
            data-id={article.id}
            title={article.title}
            date={article.date}
            description={article.description}
            image={article.image}
            email={article.email}
            published={article.published}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
