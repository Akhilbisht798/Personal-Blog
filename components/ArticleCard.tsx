import { FC } from "react"
import Image from 'next/image'

type ArticleCardProps = {
    title: string;
    description: string;
    image: string;
    id?: string;
    date?: string;
}

const ArticleCard : FC<ArticleCardProps> = ({title, description, date, image}) => {
    return (
        <div className=" w-980 h-260 border-r-20 bg-white transition-all duration-200 ease-out hover:bg-red-500">
            <div className=" inline-flex flex-col gap-30 items-start">
                <div className="text-gray-500 text-center text-xs font-graphik leading-6 uppercase">
                    {date}
                </div>
                <div className="text-gray-800 text-2xl flex flex-col w-610 font-graphik font-semibold leading-relaxed">
                    {title}
                </div>
                <div className="text-gray-600 text-lg font-graphik flex flex-col w-610 leading-relaxed">
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
    )
}

export default ArticleCard