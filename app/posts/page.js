import getAllPosts from "@/lib/getAllPost";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPosts();
  console.log(posts);

  return (
    <div className="mt-6">
      <h1>All posts</h1>

      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
