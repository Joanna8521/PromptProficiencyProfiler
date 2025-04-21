'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        你是 ChatGPT 的使用者，<br />
        還是語言世界的駕駛者？
      </h1>

      <p className="text-muted-foreground max-w-xl mb-8">
        Prompt Proficiency Profiler (PPP) 是一套診斷工具，
        幫助你辨識自己在 AI 語言操作上的層級，
        並推薦專屬的升級路徑與語氣模組。
      </p>

      <Link href="/test">
        <Button size="lg">開始語言階層診斷 →</Button>
      </Link>

      <div className="mt-12 text-sm text-gray-500">
        🧩 本工具由 Joan Wang 發想設計，專為語氣模組創作者打造。
      </div>
    </main>
  );
}
