import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProviders } from './theme-providers';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <ThemeProviders>
          <div className={`w-full max-w-3xl flex flex-col items-center p-3 mx-auto my-0`}>
            <Header />
            {children}
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
