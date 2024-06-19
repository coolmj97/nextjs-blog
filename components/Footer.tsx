import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={`flex flex-col justify-center items-center p-4`}>
      <div className={`flex mb-3`}>
        <a href="mailto:minnjeong.kim@gmail.com" className={`mr-2`}>
          <Image
            src={'../email.svg'}
            alt="email"
            width={28}
            height={28}
            className={`dark:bg-white rounded-full`}
          />
        </a>
        <a href="https://github.com/coolmj97" target="blank" className={`inline-block`}>
          <Image
            src={'../github.svg'}
            alt="github"
            width={28}
            height={28}
            className={`dark:bg-white rounded-full`}
          />
        </a>
      </div>

      <span className={`text-sm text-zinc-400 font-extralight`}>Copyright © 2024 Jade.Dev</span>
    </footer>
  );
}
