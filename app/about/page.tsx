import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

export default function AboutPage() {
  return (
    <div className={`flex flex-col items-center border border-zinc-200 w-full rounded-3xl p-3`}>
      <div className={`flex items-center mb-8`}>
        <Image
          src={'/images/mimoticon.jpeg'}
          alt="home-image"
          width={100}
          height={100}
          className={`mb-4 rounded-full mr-4`}
        />
        <p className={`font-pretendard text-2xl`}>
          Hi!👋
          <br /> I&apos;m a{' '}
          <RoughNotation type="highlight" show color="#FCF300">
            <span className={`dark:text-black`}>Junior Front-end Developer</span>
          </RoughNotation>
        </p>
      </div>

      <ul className={`text-lg`}>
        <li>🚀 실패를 두려워하지 않습니다.</li>
        <li>🚀 긍정적인 사용자 경험을 위해 노력합니다.</li>
        <li>🚀 기록과 공유에 가치를 두고 이를 실천하기 위해 노력합니다.</li>
      </ul>
    </div>
  );
}
