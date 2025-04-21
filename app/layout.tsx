import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = { ... };

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className="bg-black text-white">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
