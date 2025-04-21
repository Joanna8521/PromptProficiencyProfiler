// ✅ 對應路徑：/app/builder/page.tsx
// ✅ 頁面目標：語氣模組系統建構器（重構版本）

/**
 * PPP 模組設計器系統規劃（Builder 模組重構計畫）
 * -----------------------------------------------
 * 此頁將從「語氣人格模組設計」角度重新建立 Builder 功能結構，模組包含三層：
 * 
 * ✅ 1. 基本資料區
 *    - 模組名稱（persona）
 *    - 模組角色說明（description）
 *    - 適用場景（useCases[]）
 *
 * ✅ 2. 語氣結構設計區
 *    - 語氣特質（traits[]）
 *    - 視角（POV: 第一人稱／第三人稱）
 *    - 語速（pace: 快／慢／中）
 *    - 情緒語感（emotionStyle: 溫暖／銳利／中性）
 *    - 節奏（rhythm: 散文／條列／問答）
 *
 * ✅ 3. 模組指令與測試區
 *    - Prompt 開場語（openingLine）
 *    - 輸出格式設定（outputFormatHint）
 *    - 測試輸入（testInput）
 *    - 模組語句輸出結果（computedPrompt）
 *    - 可一鍵複製 / 匯出 JSON / 發送至 sandbox
 *
 * 🧩 未來擴充：
 *    - 儲存模組至帳戶（需登入）
 *    - 從 `/dashboard` 匯入模組 / 模組市場
 *    - 模組人格圖像生成（Midjourney 語氣圖像）
 */

// 👉 下一步將依此規劃設計畫面組件與初版欄位，並建立 canvas: BuilderFormV1
// ⚠️ 所有欄位都以物件組織，方便未來儲存、共享、重用
