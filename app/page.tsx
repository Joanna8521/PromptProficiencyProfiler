'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: '/test', label: '🧪 開始語氣層級測驗' },
  { href: '/result?level=L3', label: '🔍 查看模擬結果頁（範例）' },
  { href: '/dashboard', label: '📈 個人成長儀表板' },
  { href: '/library', label: '📚 語氣模組推薦庫' },
  { href: '/builder', label: '🧠 建構你的語氣模組' },
  { href: '/sandbox', label: '🔬 模擬語氣測試區' },
  { href: '/refiner', label: '🔄 Prompt 改寫工具' },
  { href: '/about', label: 'ℹ️ 關於本專案' }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5 }
  })
};

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white max-w-2xl mx-auto py-16 px-6 text-center space-y-10"
      initial="hidden"
      animate="show"
      variants={fadeUp}
    >
      <motion.h1
        className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        variants={fadeUp}
      >
        Prompt Proficiency Profiler
      </motion.h1>
      <motion.p className="text-gray-400 text-lg sm:text-xl" variants={fadeUp}>
        測出你在 ChatGPT 的語氣使用層級，打造專屬語言模組！
      </motion.p>
      <motion.div className="grid gap-4" variants={fadeUp}>
        {links.map((link, i) => (
          <motion.div key={link.href} custom={i + 1} variants={fadeUp}>
            <Link
              href={link.href}
              className="block w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition text-lg"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
