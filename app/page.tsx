import RecentPosts from '@/components/RecentPost';
import { getPosts } from '@/lib/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={`flex flex-col`}>
      <RecentPosts posts={posts} />
    </main>
  );
}
