import Link from 'next/link';
import Nav from './Nav';
import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';
import { RoughNotation } from 'react-rough-notation';

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
          <RoughNotation type="highlight" show={true} color="#C2E7DA">
            <div className={`font-pretendard font-normal text-2xl`}>Jade.Dev</div>
          </RoughNotation>
        </div>
      </Link>

      <div className={`flex items-center`}>
        <Nav />
        <ThemeToggleButton />
      </div>
    </header>
  );
}
