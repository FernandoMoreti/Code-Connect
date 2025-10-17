import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

const getPosts = async () => {
  try {
    const response = await fetch("http://localhost:3042/posts")
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    logger.info("Posts fetched successfully");
  
    return response.json();
  } catch (error) {
    logger.error("Failed to fetch posts" + error.message);
    return []
  }
}

export default async function Home() {

  const posts = await getPosts();

  return (
    <main>
      <div className="h-full grid grid-cols-2 gap-6 w-full overflow-y-auto scrollbar-hide">
        {
          posts.map((post) => (
            <CardPost key={post.id} post={post} />
          ))
        }
      </div>
    </main>
  );
}
