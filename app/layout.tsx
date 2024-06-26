import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProviders } from './theme-providers';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: {
    template: '%s | Jade.Dev', //동적 메타데이터
    default: 'Jade.Dev Blog',
  },
  description: 'Jade.Dev 개발 블로그입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard dark:text-white-smoke`}>
        <ThemeProviders>
          <div
            className={`mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 pb-8 h-screen flex flex-col justify-between`}
          >
            <div>
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
