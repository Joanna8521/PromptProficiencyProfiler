'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6 }
  })
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-b from-white to-slate-100">
      <motion.div
        className="max-w-2xl py-20"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <motion.h1 className="text-4xl font-bold mb-4" variants={fadeUp}>
          Prompt Proficiency Profiler
        </motion.h1>
        <motion.p className="text-lg text-gray-600 mb-6" variants={fadeUp}>
          測驗你與 ChatGPT 的語言互動成熟度，從直覺輸入者一路升級到語氣架構師！
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            href="/test"
            className="inline-block bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800"
          >
            立即開始測驗 →
          </Link>
        </motion.div>
      </motion.div>

      <motion.section
        className="max-w-4xl w-full py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold mb-6">語言層級一覽</h2>
        <div className="grid md:grid-cols-5 gap-4 text-sm text-left">
          {[
            ['L1', '直覺輸入者'],
            ['L2', '結構使用者'],
            ['L3', '語言導演'],
            ['L4', 'Meta駕駛者'],
            ['L5', '語言架構師']
          ].map(([level, title], i) => (
            <motion.div
              key={level}
              className="bg-white shadow rounded-lg p-4"
              custom={i + 1}
              variants={fadeUp}
            >
              <h3 className="font-semibold mb-1">{level}</h3>
              <p className="text-gray-700 text-sm">{title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="max-w-4xl w-full py-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-xl font-bold mb-4">功能導覽</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ['/test', '🧠 語言階層測驗', '10 題診斷你的語氣操控力'],
            ['/result?level=L3', '📊 結果卡預覽', '看看每個階層如何呈現'],
            ['/library', '🛠 語言模組推薦庫', '每階層對應的語言工具集'],
            ['/dashboard', '🪄 成長儀表板', '曲線圖 × 歷程追蹤'],
            ['/sandbox', '🧪 模組測試地圖', '套語氣生成語句，直接貼給 GPT']
          ].map(([href, title, desc], i) => (
            <motion.div key={href} custom={i + 1} variants={fadeUp}>
              <Link
                href={href}
                className="block bg-white border p-4 rounded-md shadow hover:shadow-md"
              >
                {title}
                <p className="text-sm text-gray-600">{desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <footer className="py-12 text-sm text-gray-400 text-center">
        作者：Joan Wang ｜ 內容開源於 GitHub
        <br />
        本測驗屬於「語氣宇宙 × 模組駕駛學」的一部分
      </footer>
    </main>
  );
}
