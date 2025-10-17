import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";

const getPosts = async (page) => {

  try {
    const response = await fetch(`http://localhost:3042/posts?_page=${page}&_limit=6`)
  
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

export default async function Home({ searchParams }) {

  const page = parseInt(searchParams?.page || 1, 10);
  const posts = await getPosts(page);

  return (
    <main>
      <div className="h-full grid grid-cols-2 gap-6 w-full">
        {
          posts.map((post) => (
            <CardPost key={post.id} post={post} />
          ))
        }
      </div>
      <div className="flex justify-between px-10">
        <Link
          href={`/?page=${page == 1 ? page : page - 1}`}
          className="text-green-500 cursor-pointer"
        >
          Pagina anterior
        </Link>
        <Link
          href={`/?page=${page + 1}`}
          className="text-green-500 cursor-pointer"
        >
          Proxima pagina
        </Link>
      </div>
    </main>
  );
}
