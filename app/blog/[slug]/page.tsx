import { getPost } from '@/lib/posts';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.desc,
  };
}

export default function BlogDetailPage({ params }) {
  const post = getPost(params.slug);
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <div className={`w-full mt-10`}>
      <h1 className={`text-sky-700`}>{post.title}</h1>
      <MDXComponent />
    </div>
  );
}
