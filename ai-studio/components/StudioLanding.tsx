'use client';

import StudioWorkspace from '@/studio-core/StudioWorkspace';
import ThemeToggle from '@/components/ThemeToggle';

type Locale = 'hi' | 'en' | 'zh';

const COPY: Record<Locale, { badge: string; title: string; subtitle: string; notice: string; footer: string; github: string; editor: string; editorHint: string }> = {
  hi: {
    badge: 'फ्री बीटा · AI वीडियो स्टूडियो',
    title: 'YUGANK Studio',
    subtitle: 'एक आइडिया लिखें, AI से स्क्रिप्ट और छोटे वीडियो सीन बनाएं, फिर उन्हें अपने ब्राउज़र में जोड़कर वीडियो डाउनलोड करें। 9:16 Shorts/Reels, 16:9 YouTube और 1:1 विकल्प उपलब्ध हैं।',
    notice: 'AI जनरेशन Agnes सेवा और उसकी मौजूदा limits पर निर्भर है। हर सीन 5–12 सेकंड का है; 10 सीन चुनने पर तैयार वीडियो लगभग 2 मिनट तक हो सकता है। मुफ्त उपलब्धता/कोटा बदल सकता है। इस वर्ज़न में AI voiceover/TTS शामिल नहीं है।',
    footer: 'आपकी API key इस डिवाइस के ब्राउज़र में सेव होती है। वीडियो मॉडल Agnes से चलता है; जोड़ना और export आपके ब्राउज़र में FFmpeg से होता है।',
    github: 'ओपन सोर्स आधार',
    editor: 'लोकल वीडियो एडिटर खोलें',
    editorHint: 'अपने चैनल की जानकारी से विषय सुझाएँ, स्क्रिप्ट तैयार करें और अपने वीडियो को ब्राउज़र में एडिट करें।',
  },
  en: {
    badge: 'Free beta · AI video studio',
    title: 'YUGANK Studio',
    subtitle: 'Write an idea, generate a script and short AI video scenes, then stitch and download the result in your browser. Choose 9:16 Shorts/Reels, 16:9 YouTube, or square.',
    notice: 'Generation depends on Agnes and its current limits. Each scene is 5–12 seconds; 10 scenes can make a video up to about 2 minutes. Free access and quotas can change. AI voiceover/TTS is not included in this version.',
    footer: 'Your API key is stored in this browser. Agnes generates clips; FFmpeg stitches and exports them on your device.',
    github: 'Open-source foundation',
    editor: 'Open the local video editor',
    editorHint: 'Get topic ideas from your channel profile, draft a script, and edit your video in the browser.',
  },
  zh: {
    badge: '免费测试版 · AI 视频工作室',
    title: 'YUGANK Studio',
    subtitle: '输入创意，生成脚本和短 AI 视频片段，再在浏览器中拼接并下载。支持 9:16、16:9 和正方形画幅。',
    notice: '生成取决于 Agnes 服务和当前限制。每个场景 5–12 秒；10 个场景最长约 2 分钟。免费额度可能变化。本版本不包含 AI 配音/TTS。',
    footer: 'API Key 保存在此浏览器中。Agnes 生成片段，FFmpeg 在本机浏览器中拼接导出。',
    github: '开源基础',
    editor: '打开本地视频编辑器',
    editorHint: '根据频道资料获取选题建议、起草脚本，并在浏览器中编辑视频。',
  },
};

const REPO_URL = 'https://github.com/yugank2612/yugank-studio';

export default function StudioLanding({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (l: Locale) => void }) {
  const t = COPY[locale];
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bloom-accent pointer-events-none" />
      <header className="relative z-20 flex items-center justify-between px-4 sm:px-6 h-16 max-w-5xl mx-auto">
        <span className="text-base font-bold tracking-tight text-ink">YUGANK <span className="text-accent">Studio</span></span>
        <div className="flex items-center gap-1 text-sm">
          {(['hi', 'en', 'zh'] as const).map((l) => (
            <button key={l} onClick={() => onLocaleChange(l)} className={`px-2.5 py-1 rounded-md transition ${locale === l ? 'bg-accent/10 text-accent font-medium border border-accent/20' : 'text-muted hover:text-ink-2'}`}>
              {l === 'hi' ? 'हिन्दी' : l === 'zh' ? '中文' : 'EN'}
            </button>
          ))}
          <ThemeToggle locale={locale} className="ms-1" />
        </div>
      </header>
      <main className="relative z-10 px-4 pb-16 pt-8">
        <section className="max-w-3xl lg:max-w-[42rem] mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium badge-mono mb-5"><span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />{t.badge}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">{t.title}</h1>
          <p className="mt-4 text-base sm:text-lg text-ink-2 leading-relaxed">{t.subtitle}</p>
          <p className="mt-4 p-4 rounded-xl border border-accent/20 bg-accent/5 text-sm text-ink-2 leading-relaxed">{t.notice}</p>
        </section>
        <div className="max-w-3xl lg:max-w-[42rem] mx-auto"><StudioWorkspace defaultTab="creative" /></div>
        <section className="max-w-3xl lg:max-w-[42rem] mx-auto mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
          <h2 className="text-lg font-semibold text-ink">{t.editor}</h2>
          <p className="mt-2 text-sm text-ink-2">{t.editorHint}</p>
          <a href="/local-editor/" className="inline-flex mt-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">{t.editor} ↗</a>
        </section>
        <section className="max-w-3xl lg:max-w-[42rem] mx-auto mt-14 text-center">
          <p className="text-sm text-muted leading-relaxed">{t.footer}</p>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-accent hover:underline">{t.github} ↗</a>
        </section>
      </main>
      <footer className="relative z-10 border-t border-rule/40 py-6 text-center text-xs text-muted">© {new Date().getFullYear()} YUGANK Studio · Based on FreeShortVideoStudio (MIT) by lcy362</footer>
    </div>
  );
}
