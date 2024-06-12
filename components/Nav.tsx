import navlinks from '@/data/navlinks';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      {navlinks.map((e) => (
        <Link key={e.title} href={e.to} className={`mx-5`}>
          {e.title}
        </Link>
      ))}
    </nav>
  );
}
