export const metadata = {
  title: 'Prompt Proficiency Profiler',
  description: '語氣測驗 × 模組建構平台',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
