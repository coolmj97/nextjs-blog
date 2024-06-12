import RecentPost from '@/components/RecentPost';
import { getPosts } from '@/lib/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={`w-full max-w-3xl flex flex-col`}>
      <RecentPost posts={posts} />
    </main>
  );
}
