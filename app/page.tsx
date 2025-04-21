'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6 }
  })
};

export default function SandboxPage() {
  const searchParams = useSearchParams();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [module, setModule] = useState<any>(null);

  useEffect(() => {
    // 嘗試從 localStorage 取得模組
    const raw = localStorage.getItem('ppp-builder-latest');
    if (raw) setModule(JSON.parse(raw));
  }, []);

  const handleGenerate = () => {
    if (!module || !inputText) return;
    const prompt = `請使用以下語言模組進行回應：\n\n模組名稱：${module.persona}\n角色描述：${module.description}\n適用場景：${module.useCases}\n語氣特質：${module.traits}\n視角：${module.pov}｜語速：${module.pace}｜情緒語感：${module.emotionStyle}｜節奏：${module.rhythm}\n\n${module.openingLine}\n格式提示：${module.outputFormatHint}\n\n請用以上語氣重寫以下內容：\n${inputText}`;

    // 目前先假設產生輸出語句（未串 GPT）
    setOutputText(`🧪 [模擬輸出]\n\n${prompt}`);
  };

  return (
    <motion.div className="max-w-3xl mx-auto py-12 px-6 space-y-6" initial="hidden" animate="show" variants={fadeUp}>
      <motion.h1 className="text-3xl font-bold text-center mb-4" variants={fadeUp}>
        🔬 模組語氣測試區（Sandbox）
      </motion.h1>

      {!module ? (
        <p className="text-center text-gray-500">⚠️ 尚未載入模組，請從 /builder 建立模組後再來。</p>
      ) : (
        <>
          <div className="bg-gray-100 p-4 rounded border">
            <p className="text-sm text-gray-500 mb-2">📋 使用模組：</p>
            <p className="text-base font-medium">{module.persona}（{module.description}）</p>
          </div>

          <div className="space-y-3">
            <label className="block font-medium">請輸入你要模擬的語句</label>
            <textarea
              className="w-full border rounded p-2"
              rows={4}
              placeholder="例如：請幫我解釋這段文字..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={handleGenerate}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              生成語氣語句
            </button>
          </div>

          {outputText && (
            <div className="bg-white border p-4 rounded mt-6 whitespace-pre-wrap">
              <p className="text-sm text-gray-500 mb-2">🔧 模擬結果</p>
              <pre>{outputText}</pre>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
