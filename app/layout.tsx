import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Prompt Proficiency Profiler',
  description: '語氣層級測驗 × 模組建構平台'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-Hant" className="dark">
      <body className={`bg-black text-white ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
