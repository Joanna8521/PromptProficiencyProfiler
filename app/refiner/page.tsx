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

const models = [
  { id: 'gpt35', label: 'OpenAI GPT-3.5' },
  { id: 'gpt4', label: 'OpenAI GPT-4' },
  { id: 'claude2', label: 'Anthropic Claude 2' },
  { id: 'bard', label: 'Google Bard' }
];

function refinePrompt(raw: string, model: string) {
  const base = raw.trim();
  return `【適用於 ${model} 的精煉指令】\n請依下列目標完成輸出：${base}\n- 盡可能詳盡列出步驟\n- 使用清晰條列或段落格式\n- 如需引用資料請備註來源`;
}

export default function PromptRefinerPage() {
  const [input, setInput] = useState('');
  const [model, setModel] = useState(models[0]);
  const [output, setOutput] = useState('');

  const handleRefine = () => {
    setOutput(refinePrompt(input, model.label));
  };

  return (
    <motion.div className="max-w-3xl mx-auto py-12 px-6 space-y-6" initial="hidden" animate="show" variants={fadeUp}>
      <motion.h1 className="text-3xl font-bold text-center" variants={fadeUp}>
        🔄 Prompt 改寫工具
      </motion.h1>

      <motion.div className="grid gap-4" variants={fadeUp}>
        <label className="font-semibold">選擇目標模型：</label>
        <select
          className="border p-2 rounded w-full"
          value={model.id}
          onChange={(e) => {
            const found = models.find(m => m.id === e.target.value);
            if (found) setModel(found);
          }}
        >
          {models.map((m) => (
            <option key={m.id} value={m.id}>{m.label}</option>
          ))}
        </select>
      </motion.div>

      <motion.div className="grid gap-4" variants={fadeUp}>
        <label className="font-semibold">輸入原始指令：</label>
        <textarea
          rows={5}
          className="border p-3 rounded w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="貼上想改寫的 prompt..."
        />
      </motion.div>

      <motion.button
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        onClick={handleRefine}
        variants={fadeUp}
      >
        生成改寫版本 →
      </motion.button>

      {output && (
        <motion.div className="bg-gray-50 border p-4 rounded whitespace-pre-line" variants={fadeUp}>
          <p className="text-sm text-gray-500 mb-2">改寫後的 prompt：</p>
          <p className="text-gray-900">{output}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
