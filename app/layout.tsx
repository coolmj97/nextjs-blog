import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProviders } from './theme-providers';

const pretendard = localFont({
  src: '../public/fonts/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});
export const metadata: Metadata = {
  title: {
    template: '%s | Mlog', //동적 메타데이터
    default: 'Mlog',
  },
  description: '개발 블로그입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <ThemeProviders>
          <div className={`mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0`}>
            <Header />
            {children}
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
