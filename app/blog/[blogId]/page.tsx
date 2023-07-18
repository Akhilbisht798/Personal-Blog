import Blog, { BlogType } from "@/components/Blog";

async function getData(id: String) {
  const res = await fetch("http://localhost:3000/api/post/postId?id=" + id, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page({ params }: { params: { blogId: string } }) {
  const blog = await getData(params.blogId);
  return (
    <div>
      <Blog
        content={blog.content}
        title={blog.title}
        date={blog.date}
        image={blog.image}
      />
    </div>
  );
}
