import BlogPostItem from '@/components/BlogPostItem';
import { getPosts } from '@/lib/posts';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={`flex flex-col mt-20`}>
      {posts.map((post) => (
        <BlogPostItem
          key={post._id}
          id={post._id}
          title={post.title}
          date={post.date}
          desc={post.desc}
          path={post._raw.flattenedPath}
        />
      ))}
    </div>
  );
}
