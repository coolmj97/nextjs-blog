import BlogPost from '@/components/BlogPost';
import { getPosts } from '@/lib/posts';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={`w-full max-w-3xl mt-10 flex-col`}>
      {posts.map((post) => (
        <BlogPost
          key={post._id}
          title={post.title}
          date={post.date}
          desc={post.desc}
          slug={post._raw.flattenedPath}
        />
      ))}
    </div>
  );
}
