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
    <div className={`p-6 mt-5 md:mt-10`}>
      <div className={`flex flex-col items-center`}>
        <div className={`text-gray-400 mb-4 text-center text-sm`}>{post.date}</div>
        <h1 className={`text-4xl md:text-5xl text-center inline-block`}>{post.title}</h1>
      </div>

      {/* divider */}
      <div className={`h-px bg-gray-200 my-8`}></div>

      <MDXComponent />
    </div>
  );
}
