import Github from './icons/Github';
import Email from './icons/Email';

export default function Footer() {
  return (
    <footer className={`flex flex-col justify-center items-center p-4`}>
      <div className={`flex items-center mb-3`}>
        <a href="mailto:minnjeong.kim@gmail.com" className={`mr-2`}>
          <Email />
        </a>
        <a href="https://github.com/coolmj97" target="blank" className={`inline-block`}>
          <Github />
        </a>
      </div>

      <span className={`text-sm text-zinc-400 font-extralight`}>Copyright © 2024 Jade.Dev</span>
    </footer>
  );
}
