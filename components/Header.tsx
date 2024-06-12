import Link from 'next/link';
import Nav from './Nav';
import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
    <header className={`w-full max-w-3xl flex justify-between items-center my-1`}>
      <Link href="/">
        <div className={`flex items-center`}>
          <Image
            priority
            src={'/images/logo.png'}
            alt="logo"
            width={40}
            height={40}
            className={`rounded-full mr-2`}
          />
          Mlog
        </div>
      </Link>

      <div className={`flex`}>
        <Nav />
        <ThemeToggleButton />
      </div>
    </header>
  );
}
