import Link from 'next/link';
import Nav from './Nav';
import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
    <header className={`flex justify-between items-center py-8`}>
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
          <div className={`font-pretendard font-normal text-2xl`}>Jade.Dev</div>
        </div>
      </Link>

      <div className={`flex items-center`}>
        <Nav />
        <ThemeToggleButton />
      </div>
    </header>
  );
}
