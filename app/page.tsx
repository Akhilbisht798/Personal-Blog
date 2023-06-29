import Blog from "@/components/Blog";
import BlogSection from "@/components/home/BlogSection";
import HeroSection from "@/components/home/HeroSection";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div>
      <Blog
        title="Hello This is my first blog"
        date={new Date()}
        content="Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. 
        Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.
        The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? "
        image="https://plus.unsplash.com/premium_photo-1686090450592-aca413579d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}
