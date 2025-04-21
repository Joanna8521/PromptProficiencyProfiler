'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6 }
  })
};

export default function BuilderPage() {
  const [persona, setPersona] = useState('');
  const [traits, setTraits] = useState('');
  const [styleNotes, setStyleNotes] = useState('');
  const [example, setExample] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const result = `請使用以下語言模組進行回應：\n\n模組名稱：${persona}\n語氣特質：${traits}\n風格備註：${styleNotes}\n\n請用以上語氣幫我重寫以下內容：\n${example}`;
    setOutput(result);
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div className="max-w-3xl mx-auto py-12 px-6" initial="hidden" animate="show" variants={fadeUp}>
      <motion.h1 className="text-3xl font-bold mb-6 text-center" variants={fadeUp}>
        🛠 語氣模組建構器
      </motion.h1>

      <motion.div className="space-y-6" variants={fadeUp}>
        <div>
          <label className="block font-medium mb-1">模組名稱</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="如：溫柔理性型講師"
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">語氣特質</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="如：溫柔、條理清楚、有耐心"
            value={traits}
            onChange={(e) => setTraits(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">風格備註（語速、視角、節奏等）</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="如：節奏慢、有空白感、不強迫"
            value={styleNotes}
            onChange={(e) => setStyleNotes(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">範例內容</label>
          <textarea
            className="w-full border rounded-md p-2"
            rows={4}
            placeholder="請貼上你想要重寫的文字"
            value={example}
            onChange={(e) => setExample(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          onClick={handleGenerate}
        >
          生成模組語氣 Prompt
        </button>

        {output && (
          <div className="bg-gray-50 border p-4 mt-6 rounded-md whitespace-pre-wrap">
            <p className="text-sm text-gray-500 mb-2">📎 生成語句：</p>
            <p className="mb-4">{output}</p>
            <button
              onClick={handleCopy}
              className="px-4 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {copied ? '✅ 已複製！' : '📋 複製語句'}
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
