import Link from 'next/link';

interface BlogPostItemProps {
  id: string;
  date: string;
  title: string;
  desc: string;
  path: string;
}

export default function BlogPostItem(props: BlogPostItemProps) {
  const { id, date, title, desc, path } = props;
  return (
    <Link key={id} href={`/blog/${path}`} className={`w-full border-y p-12`}>
      <div className={`font-light text-md text-gray-500 mb-4`}>{date}</div>
      <div className={`font-medium text-2xl mb-2`}>{title}</div>
      <div className={`font-light text-gray-500`}>{desc}</div>
    </Link>
  );
}
