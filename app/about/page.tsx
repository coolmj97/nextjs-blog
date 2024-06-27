import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';
import createMetadata from '../seo';

export const metadata = createMetadata({
  title: 'About',
  description: '소개글 페이지입니다.',
});

export default function AboutPage() {
  return (
    <div className={`flex flex-col items-center border border-zinc-200 w-full rounded-3xl p-3`}>
      <p className={`mb-5`}>블로그 방문을 환영합니다 🎉</p>
      <div className={`flex items-center mb-8`}>
        <Image
          src={'/images/mimoticon.jpeg'}
          alt="home-image"
          width={100}
          height={100}
          className={`mb-4 rounded-full mr-4`}
        />

        <p className={`font-pretendard text-lg md:text-2xl text-center`}>
          Hi!👋 I&apos;m a <br />
          <RoughNotation type="highlight" show color="#FCF300">
            <span className={`dark:text-black`}>Junior Front-end Developer</span>
          </RoughNotation>
        </p>
      </div>
      <ul className="mb-5">
        <li>🚀 실패를 두려워하지 않습니다.</li>
        <li>🚀 긍정적인 사용자 경험을 위해 노력합니다.</li>
        <li>🚀 기록과 공유에 가치를 두고 이를 실천하기 위해 노력합니다.</li>
      </ul>

      <div className=" text-xs">이 블로그는 Next.js 14를 기반으로 만들어졌습니다.</div>
    </div>
  );
}
