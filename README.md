# 🧠 語言階層診斷系統｜Language Mastery Profiler

這是一個為 ChatGPT 使用者打造的語言操作層級診斷工具。透過 10 題互動問卷，幫助使用者辨識自己是直覺輸入者、語言導演，還是語言架構師。

> 🚀 部署：本專案可直接部署至 [Vercel](https://vercel.com/)

---

## 🔧 功能架構

```
/
├── landing/       # 首頁：簡介、共鳴引導、CTA
├── test/          # 問卷表單（可一題一頁 or 全頁）
├── result/        # 根據問卷結果呈現 L1–L5 對應頁
├── library/       # 語氣模組範例庫、角色卡、prompt 分享
├── about/         # 專案理念、FAQ、使用說明
└── components/    # 共用 UI 元件（Card, Button 等）
```

---

## 📌 五階層定義（用於結果分流）

| 層級 | 說明 |
|------|------|
| L1｜直覺輸入者 | 沒有設計意識，想到什麼就輸入什麼 |
| L2｜結構使用者 | 會用格式、條列與關鍵語句來控制輸出 |
| L3｜語言導演 | 操控語氣與風格、會模擬語者或觀眾 |
| L4｜Meta駕駛者 | 建立語言模組、角色語氣、多層次控制 |
| L5｜語言架構師 | 設計語氣宇宙與語言 API，模組系統開發者 |

---

## 🧪 技術建議

- **架構**：Next.js 14
- **UI**：Tailwind CSS + shadcn/ui
- **狀態管理**：Zustand / React Hook Form
- **部署平台**：Vercel
- **未來擴充**：支援登入、儲存歷程、語氣模組生成器

---

## ✨ CTA 對應邏輯（診斷結果連結）

| 使用者類型 | 建議行動 |
|-------------|-------------|
| L1 | 試試這份 prompt 工具箱 → `/library#beginner` |
| L2 | 練習語言風格轉換 → `/library#styling` |
| L3 | 自建語氣人格卡片 → `/library#persona-builder` |
| L4 | 啟動語氣模組駕駛艙 → `/library#meta-deck` |
| L5 | 開始設計語氣宇宙 API → `/library#framework` |

---

## 📥 快速部署指令

```bash
git clone https://github.com/yourname/language-profiler.git
cd language-profiler
npm install
npm run dev
```

---

## 📫 聯絡與貢獻

如果你有想法、模組範例、語氣分類邏輯想共創，歡迎提出 PR 或私訊作者。

---

🧩 專案靈感來自語氣模組設計師 [Joan Wang]，本頁面屬於開源實驗性內容系統模擬提案。

---
