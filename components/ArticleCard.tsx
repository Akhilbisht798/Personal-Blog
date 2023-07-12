import { FC } from "react";
import Image from "next/image";

export type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  id?: string;
  date: Date;
  email: string;
  published?: boolean;
};

const ArticleCard: FC<ArticleCardProps> = ({
  title,
  description,
  date,
  image,
  email,
  published,
}) => {
  return (
    <div className=" flex md:flex-row flex-col flex-shrink-0 p-4 bg-white rounded-md gap-[16px] md:w-auto w-[343px] leading-relaxed transition transition-1000 hover:shadow-lg hover:cursor-pointer">
      <div className="flex flex-col lg:gap-[30px] items-start">
        <div className="text-gray-500 text-center text-xs font-graphik leading-6 uppercase">
          {date}
          {/* TODO: find a way for date to work. */}
        </div>
        <div className="text-gray-800 text-xl xl:w-[610px] md:w-[380px] font-graphik font-semibold leading-tight">
          {title}
        </div>
        <div className="text-gray-600 text-base font-graphik leading-relaxed">
          {description}
        </div>
      </div>
      <Image
        width={300}
        height={211.852}
        src={image}
        alt="Image"
        className="object-cover object-center rounded-10 flex-shrink-0"
      />
    </div>
  );
};

export default ArticleCard;
