'use client';

import navlinks from '@/data/navlinks';
import Link from 'next/link';
import { useState } from 'react';
import { RoughNotation } from 'react-rough-notation';

export default function Nav() {
  const [currentTitle, setCurrentTitle] = useState(null);

  const onMouseOver = (title: string) => {
    setCurrentTitle(title);
  };

  const onMouseLeave = () => {
    setCurrentTitle(null);
  };

  return (
    <nav className={`hidden sm:block`}>
      {navlinks.map((e) => (
        <Link
          key={e.title}
          href={e.to}
          className={`mx-2 md:mx-4`}
          onMouseOver={() => onMouseOver(e.title)}
          onMouseLeave={onMouseLeave}
        >
          <RoughNotation type="underline" show={e.title === currentTitle ? true : false}>
            {e.title}
          </RoughNotation>
        </Link>
      ))}
    </nav>
  );
}
