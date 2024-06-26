import createMetadata from '@/app/seo';
import Comments from '@/components/Comments';
import { getPost } from '@/lib/posts';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return createMetadata({
    title: post.title,
    description: post.desc,
  });
}

export default function BlogDetailPage({ params }) {
  const post = getPost(params.slug);
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <div className={`p-6 mt-5 md:mt-10`}>
      <div className={`flex flex-col items-center`}>
        <h1 className={`text-4xl md:text-5xl text-center inline-block mb-4`}>{post.title}</h1>
        <div className={`text-gray-400 text-center text-sm`}>{post.date}</div>
      </div>
      {/* divider */}
      <div className={`h-px bg-gray-200 my-8`}></div>
      <div className="prose max-w-full">
        <MDXComponent />
      </div>

      <div className={`h-px bg-gray-200 my-8`}></div>
      <Comments />
    </div>
  );
}
