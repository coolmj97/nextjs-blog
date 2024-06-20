'use client';

import navlinks from '@/data/navlinks';
import Link from 'next/link';
import { useState } from 'react';
import { RoughNotation } from 'react-rough-notation';
import Menu from './icons/Menu';
import Close from './icons/Close';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const path = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {showMenu ? (
        <nav
          className={`flex flex-col items-center text-center bg-white dark:bg-gray-800 absolute top-0 ${
            showMenu ? 'right-0' : 'right-12'
          } w-screen h-screen z-10 pt-32`}
        >
          {navlinks.map((e) => (
            <Link key={e.title} href={e.to} className={`w-full p-6 text-2xl`} onClick={toggleMenu}>
              <RoughNotation type="underline" show={e.to === path}>
                {e.title}
              </RoughNotation>
            </Link>
          ))}

          <div onClick={toggleMenu} className={`absolute top-6 right-6`}>
            <Close />
          </div>
        </nav>
      ) : (
        <div onClick={toggleMenu} className={`sm:hidden`}>
          <Menu />
        </div>
      )}
    </>
  );
}
