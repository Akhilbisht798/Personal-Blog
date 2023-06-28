import ArticleCard from '@/components/ArticleCard'
import HeroSection from '@/components/home/HeroSection'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div> 
      <Navigation></Navigation>
      <HeroSection />
      <ArticleCard title='Hello testing' description='this is testing the article' date='August 13, 2023' image='https://images.unsplash.com/photo-1610224736592-ce444a93b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' />
      <ArticleCard title='Lorem ispum is the new ispum in the world what i am saying is this why this is colla vary dee zig and sharko.' description='this is testing the article' date='August 13, 2023' image='https://images.unsplash.com/photo-1610224736592-ce444a93b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' />
    </div>
  )
}
