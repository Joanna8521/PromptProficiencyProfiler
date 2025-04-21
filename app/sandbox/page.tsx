'use client';

import { useState } from 'react';

const presets = [
  {
    id: 'warm-teacher',
    label: '溫暖老師語氣',
    template: '請用像 podcast 主持人＋溫柔老師的語氣來解釋以下內容：'
  },
  {
    id: 'sharp-critic',
    label: '犀利評論家語氣',
    template: '請用邏輯犀利、冷靜批判者語氣來分析：'
  },
  {
    id: 'playful-friend',
    label: '療癒吐槽系朋友',
    template: '請用親密朋友＋吐槽風格語氣講這段內容：'
  },
  {
    id: 'neutral-expert',
    label: '專業中性分析',
    template: '請用理性條列、平穩專業語氣回應以下資訊：'
  }
];

export default function SandboxPage() {
  const [input, setInput] = useState('');
  const [preset, setPreset] = useState(presets[0]);
  const [combined, setCombined] = useState('');

  const handleGenerate = () => {
    setCombined(`${preset.template}\n${input}`);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🧪 模組語氣測試地圖</h1>

      <div className="mb-6">
        <label className="block font-semibold mb-2">選擇語氣模組：</label>
        <select
          className="w-full border p-2 rounded-md"
          value={preset.id}
          onChange={(e) => {
            const found = presets.find((p) => p.id === e.target.value);
            if (found) setPreset(found);
          }}
        >
          {presets.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">輸入測試內容：</label>
        <textarea
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border p-3 rounded-md"
          placeholder="貼上你想測試的內容，例如某段說明、文案、教學指令..."
        />
      </div>

      <button
        onClick={handleGenerate}
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 mb-6"
      >
        生成語氣版 prompt →
      </button>

      {combined && (
        <div className="bg-gray-50 border p-4 rounded-md whitespace-pre-line">
          <p className="text-sm text-gray-500 mb-2">生成語句：</p>
          <p className="text-gray-900">{combined}</p>
        </div>
      )}
    </div>
  );
}
