import { Post } from 'contentlayer/generated';
import BlogPostItem from './BlogPostItem';

interface RecentPostProps {
  posts: Post[];
}

export default function RecentPosts({ posts }: RecentPostProps) {
  return (
    <section className={`mt-10 md:mt-20`}>
      <h1 className={`text-3xl md:text-4xl font-semibold mb-10`}>Latest</h1>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map((post) => (
          <BlogPostItem
            key={post._id}
            id={post._id}
            date={post.date}
            title={post.title}
            desc={post.desc}
            path={post._raw.flattenedPath}
          />
        ))}
      </div>
    </section>
  );
}
