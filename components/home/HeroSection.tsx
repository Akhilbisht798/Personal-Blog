const HeroSection = () => {
    return (
        <div className=" flex flex-col items-center justify-center gap-10 md:px-[255px] md:pt-[120px] md:pb-[80px] px-5 pb-[80px] bg-white">
           <div className="flex flex-col items-center justify-center gap-[40px]">
                <div className=" flex flex-col text-center md:text-7xl text-5xl pt-14 font-bold leading-relaxed tracking-tighter font-graphik">
                    <p className="bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text">Welcome to My Learning.</p>
                </div>
                <div className="flex flex-col  text-gray-600 text-center text-lg font-graphik leading-1.5">
                    100% customisable and SEO-friendly blog template for personal and commercial purposes.
                </div>
            </div> 
        </div>
    )

}

export default HeroSection;