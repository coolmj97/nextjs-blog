'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 350) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //스크롤 높이를 계산
  //계산 값에 따라 상태에 true/false 저장

  return (
    <button
      type="button"
      onClick={onClick}
      className={`fixed bottom-10 right-5 p-2 rounded-full bg-zinc-200 transition-all ${
        show ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
      }`}
    >
      <Image priority src={'../top.svg'} alt="맨 위로" width={40} height={40} />
    </button>
  );
}
