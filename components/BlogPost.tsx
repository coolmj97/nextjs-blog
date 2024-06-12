import Link from 'next/link';

const BlogPost = ({ title, date, desc, slug }) => {
  return (
    <Link href={`/blog/${slug}`} className={`w-full my-7`}>
      <div className={`font-medium text-xs text-gray-400`}>{date}</div>
      <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
      <div className={`font-medium text-gray-600 text-xl mt-1`}>{desc}</div>
    </Link>
  );
};

export default BlogPost;
