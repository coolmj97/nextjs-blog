import { Post } from 'contentlayer/generated';
import Link from 'next/link';

interface RecentPostProps {
  posts: Post[];
}

const RecentPost = ({ posts }: RecentPostProps) => {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extralight`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map((post) => (
          <Link key={post._id} href={`/blog/${post._raw.flattenedPath}`} className={`w-fit`}>
            <div className={`font-medium text-xl mt-5`}>{post.title}</div>
            <div className={`font-light `}>{post.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPost;
