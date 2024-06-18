import BlogPostItem from '@/components/BlogPostItem';
import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={`flex flex-col mt-10 md:mt-20`}>
      <h1 className={`text-3xl md:text-4xl font-semibold mb-10`}>All Posts</h1>
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
