import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import DotPattern from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"

const EXAMPLES = [
  {
    concept: "Доброта",
    score: "Высокий балл",
    parts: [
      {
        label: "Тезис",
        color: "text-blue-300",
        text: "Что такое доброта? Я думаю, что доброта — это способность человека бескорыстно помогать другим, проявлять заботу и сочувствие, не ожидая ничего взамен.",
      },
      {
        label: "Аргумент 1 (из текста)",
        color: "text-purple-300",
        text: "Проиллюстрировать это можно на примере из текста. В предложении 12 автор показывает, как главный герой, не раздумывая, отдал последние деньги незнакомому человеку, попавшему в беду. Этот поступок говорит о настоящей, искренней доброте.",
      },
      {
        label: "Аргумент 2 (из жизни)",
        color: "text-emerald-300",
        text: "Похожую ситуацию я наблюдал(а) в жизни. Однажды моя соседка каждый день помогала пожилой женщине из нашего дома: приносила продукты, убиралась, просто разговаривала. Никто её об этом не просил — она делала это по велению сердца.",
      },
      {
        label: "Вывод",
        color: "text-amber-300",
        text: "Таким образом, доброта — это не слабость, а сила. Именно добрые люди делают мир вокруг нас лучше и теплее.",
      },
    ],
  },
  {
    concept: "Мужество",
    score: "Высокий балл",
    parts: [
      {
        label: "Тезис",
        color: "text-blue-300",
        text: "По моему мнению, мужество — это способность человека преодолевать страх и действовать решительно даже в самых трудных обстоятельствах.",
      },
      {
        label: "Аргумент 1 (из текста)",
        color: "text-purple-300",
        text: "Обратимся к тексту. В предложениях 8–10 автор описывает, как мальчик, несмотря на страх, бросился в воду, чтобы спасти тонущего щенка. Он рисковал собственной жизнью — вот настоящее мужество.",
      },
      {
        label: "Аргумент 2 (из жизни)",
        color: "text-emerald-300",
        text: "Подтвердить свою мысль я могу примером из личного опыта. Мой дедушка рассказывал, как во время службы в армии его товарищ, превозмогая боль, вынес раненого бойца из-под огня. Этот поступок навсегда остался для нас примером настоящего мужества.",
      },
      {
        label: "Вывод",
        color: "text-amber-300",
        text: "Подводя итог, можно сказать, что мужество — это не отсутствие страха, а умение действовать вопреки ему ради других или ради важного дела.",
      },
    ],
  },
  {
    concept: "Дружба",
    score: "Высокий балл",
    parts: [
      {
        label: "Тезис",
        color: "text-blue-300",
        text: "Я думаю, что дружба — это особые отношения между людьми, основанные на взаимном доверии, уважении и готовности прийти на помощь в любую минуту.",
      },
      {
        label: "Аргумент 1 (из текста)",
        color: "text-purple-300",
        text: "Чтобы подтвердить сказанное, обратимся к тексту. В предложении 15 автор показывает, как Колька, рискуя получить двойку, не выдал секрет своего друга учителю. Это и есть настоящая дружба — верность даже под давлением.",
      },
      {
        label: "Аргумент 2 (из жизни)",
        color: "text-emerald-300",
        text: "В жизни нередко встречаются ситуации, когда дружба проверяется трудностями. Например, когда мой друг серьёзно заболел, мы с ребятами из класса каждый день приносили ему домашние задания и не давали отстать от программы. Я думаю, именно в такие моменты и рождается настоящая дружба.",
      },
      {
        label: "Вывод",
        color: "text-amber-300",
        text: "Таким образом, дружба — это бесценный дар, который нужно беречь. Настоящий друг всегда рядом — и в радости, и в горе.",
      },
    ],
  },
]

export function EssayExamples() {
  const [active, setActive] = useState(0)
  const example = EXAMPLES[active]

  return (
    <div className="w-full space-y-4">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {EXAMPLES.map((ex, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-lg border px-4 py-2 text-sm font-open-sans-custom transition-all",
              active === i
                ? "bg-white/15 border-white/30 text-white"
                : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
            )}
          >
            «{ex.concept}»
          </button>
        ))}
      </div>

      {/* Essay */}
      <div className="relative rounded-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden">
        <DotPattern width={5} height={5} />
        <div className="relative z-10 p-6 space-y-5">
          <div className="flex items-center gap-3">
            <Badge className="bg-white/10 text-white border-white/20">13.3 · {example.concept}</Badge>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-xs">{example.score}</Badge>
          </div>
          {example.parts.map((part, i) => (
            <div key={i} className="space-y-1">
              <p className={cn("text-xs font-open-sans-custom uppercase tracking-wider font-semibold", part.color)}>
                {part.label}
              </p>
              <p className="text-gray-200 text-sm font-open-sans-custom leading-relaxed">{part.text}</p>
            </div>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-open-sans-custom">
              {example.parts.map(p => p.text).join(" ").trim().split(/\s+/).length} слов
            </span>
            <span className="text-xs text-emerald-400 font-open-sans-custom">✓ структура соблюдена</span>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {example.parts.map((part, i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <p className={cn("text-xs font-semibold font-open-sans-custom mb-1", part.color)}>{part.label}</p>
            <p className="text-[11px] text-gray-400 font-open-sans-custom leading-relaxed">
              {i === 0 && "Определение + тезис о понятии"}
              {i === 1 && "Ссылка на предложение + анализ"}
              {i === 2 && "Личный опыт + мини-вывод"}
              {i === 3 && "Итог, связанный с тезисом"}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
