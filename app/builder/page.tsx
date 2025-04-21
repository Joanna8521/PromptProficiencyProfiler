'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6 }
  })
};

const modules = [
  {
    id: 'beginner',
    title: 'Prompt 格式模板工具箱',
    description: '適合剛入門的使用者，快速建立「有明確格式」的語言輸入習慣。',
    example: '請用條列方式整理以下內容，並加上 emoji。'
  },
  {
    id: 'styling',
    title: '語氣風格轉換練習集',
    description: '訓練你根據不同角色語感與場景進行轉譯與語速調整。',
    example: '請用 podcast 主持人口吻，講解這段資訊，語氣溫暖但不誇張。'
  },
  {
    id: 'persona-builder',
    title: '語言人格建構器',
    description: '讓你定義自己的語氣模組，並建立模組語法與角色格式。',
    example: '我的語氣模組：溫柔、邏輯清晰、有節奏感。請用此語氣幫我重寫以下文字...'
  },
  {
    id: 'meta-deck',
    title: '語言模組駕駛艙工具組',
    description: '支援語氣切換、drift 偵測、角色維穩等高階控制工具。',
    example: '請在回應前檢查語氣是否偏移，若偏移請重新生成。保持模組人格：「冷靜犀利、推理導向」。'
  },
  {
    id: 'framework',
    title: '語氣宇宙 × 系統設計地圖',
    description: '將你的語言模組系統化，包含 API 設計、分類邏輯與人格節點拓展。',
    example: '我想建立五種語氣角色人格，每一種有三種場景模組。請協助產出分類與語法命名。'
  }
];

export default function LibraryPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-12 px-6"
      initial="hidden"
      animate="show"
      variants={fadeUp}
    >
      <motion.h1 className="text-3xl font-bold mb-10 text-center" variants={fadeUp}>
        語言模組推薦庫
      </motion.h1>
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={fadeUp}
      >
        {modules.map((mod, idx) => {
          const isLink = mod.id === 'persona-builder';
          const CardContent = (
            <motion.div
              className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition h-full"
              custom={idx + 1}
              variants={fadeUp}
            >
              <h2 className="text-xl font-semibold mb-2">{mod.title}</h2>
              <p className="text-gray-600 mb-2">{mod.description}</p>
              <p className="text-sm text-gray-800 italic">範例語句：{mod.example}</p>
            </motion.div>
          );

          return isLink ? (
            <Link href="/builder" key={mod.id} className="h-full">{CardContent}</Link>
          ) : (
            <div key={mod.id}>{CardContent}</div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
