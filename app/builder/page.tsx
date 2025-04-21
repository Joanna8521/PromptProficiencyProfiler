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

export default function BuilderFormV1() {
  const [form, setForm] = useState({
    persona: '',
    description: '',
    useCases: '',
    traits: '',
    pov: '',
    pace: '',
    emotionStyle: '',
    rhythm: '',
    openingLine: '',
    outputFormatHint: '',
    testInput: ''
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const preview = `請使用以下語言模組進行回應：\n\n模組名稱：${form.persona}\n角色描述：${form.description}\n適用場景：${form.useCases}\n語氣特質：${form.traits}\n視角：${form.pov}｜語速：${form.pace}｜情緒語感：${form.emotionStyle}｜節奏：${form.rhythm}\n\n${form.openingLine}\n格式提示：${form.outputFormatHint}\n\n請用以上語氣重寫以下內容：\n${form.testInput}`;

  return (
    <motion.div className="max-w-3xl mx-auto py-12 px-6 space-y-8" initial="hidden" animate="show" variants={fadeUp}>
      <motion.h1 className="text-3xl font-bold text-center" variants={fadeUp}>
        🧠 模組人格建構器（V1）
      </motion.h1>

      {/* 基本區塊 */}
      <section className="grid gap-4">
        <h2 className="font-semibold text-lg">模組基本資訊</h2>
        <input placeholder="模組名稱（如：溫柔理性型講師）" value={form.persona} onChange={e => handleChange('persona', e.target.value)} className="border p-2 rounded w-full" />
        <input placeholder="模組描述（這個角色是怎樣的？）" value={form.description} onChange={e => handleChange('description', e.target.value)} className="border p-2 rounded w-full" />
        <input placeholder="適用場景（用逗號分隔）" value={form.useCases} onChange={e => handleChange('useCases', e.target.value)} className="border p-2 rounded w-full" />
      </section>

      {/* 語氣區塊 */}
      <section className="grid gap-4">
        <h2 className="font-semibold text-lg">語氣結構設計</h2>
        <input placeholder="語氣特質（如：溫柔、有條理）" value={form.traits} onChange={e => handleChange('traits', e.target.value)} className="border p-2 rounded w-full" />
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="視角（如：第一人稱）" value={form.pov} onChange={e => handleChange('pov', e.target.value)} className="border p-2 rounded w-full" />
          <input placeholder="語速（如：慢）" value={form.pace} onChange={e => handleChange('pace', e.target.value)} className="border p-2 rounded w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="情緒語感（如：溫暖）" value={form.emotionStyle} onChange={e => handleChange('emotionStyle', e.target.value)} className="border p-2 rounded w-full" />
          <input placeholder="節奏（如：條列）" value={form.rhythm} onChange={e => handleChange('rhythm', e.target.value)} className="border p-2 rounded w-full" />
        </div>
      </section>

      {/* 指令設定區 */}
      <section className="grid gap-4">
        <h2 className="font-semibold text-lg">Prompt 設計與測試</h2>
        <input placeholder="開場語（如：請用以下語氣回應...）" value={form.openingLine} onChange={e => handleChange('openingLine', e.target.value)} className="border p-2 rounded w-full" />
        <input placeholder="格式提示（如：請使用條列＋emoji）" value={form.outputFormatHint} onChange={e => handleChange('outputFormatHint', e.target.value)} className="border p-2 rounded w-full" />
        <textarea placeholder="測試文字內容..." value={form.testInput} onChange={e => handleChange('testInput', e.target.value)} rows={4} className="border p-2 rounded w-full" />
      </section>

      {/* 預覽輸出區 */}
      <section className="mt-8 border p-4 rounded bg-gray-50">
        <h3 className="text-sm text-gray-500 mb-2">📎 生成語句預覽：</h3>
        <pre className="whitespace-pre-wrap text-sm">{preview}</pre>
      </section>
    </motion.div>
  );
}
