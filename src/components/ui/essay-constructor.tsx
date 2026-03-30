import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import DotPattern from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"

const CLICHE = {
  thesis: [
    "По моему мнению, [ПОНЯТИЕ] — это…",
    "Я думаю, что [ПОНЯТИЕ] — это…",
    "Что такое [ПОНЯТИЕ]? Попробуем поразмышлять над значением этого слова.",
  ],
  arg1: [
    "Проиллюстрировать это можно на примере из текста. Так, в предложении … автор показывает…",
    "Обратимся к тексту. В предложении … мы видим, что…",
    "Чтобы подтвердить сказанное, обратимся к тексту: «…»",
  ],
  arg2: [
    "Похожую ситуацию я наблюдал(а) в жизни. Однажды…",
    "Подтвердить свою мысль я могу примером из личного опыта…",
    "В жизни нередко встречаются ситуации, когда… Например…",
  ],
  conclusion: [
    "Таким образом, [ПОНЯТИЕ] — это…",
    "Подводя итог, можно сказать, что…",
    "В результате рассуждения мы приходим к выводу: [ПОНЯТИЕ] — важная часть жизни каждого человека.",
  ],
}

type Part = "thesis" | "arg1" | "arg2" | "conclusion"

const PARTS: { key: Part; label: string; hint: string; color: string }[] = [
  { key: "thesis", label: "Вступление (тезис)", hint: "Дай определение понятию и сформулируй тезис", color: "bg-blue-500/20 border-blue-400/30" },
  { key: "arg1", label: "Аргумент 1 — из текста", hint: "Приведи пример из предложенного текста с анализом", color: "bg-purple-500/20 border-purple-400/30" },
  { key: "arg2", label: "Аргумент 2 — из жизни", hint: "Приведи пример из личного опыта или второй пример из текста", color: "bg-emerald-500/20 border-emerald-400/30" },
  { key: "conclusion", label: "Заключение (вывод)", hint: "Сделай вывод, перекликающийся с тезисом", color: "bg-amber-500/20 border-amber-400/30" },
]

export function EssayConstructor() {
  const [concept, setConcept] = useState("")
  const [texts, setTexts] = useState<Record<Part, string>>({ thesis: "", arg1: "", arg2: "", conclusion: "" })
  const [activeTab, setActiveTab] = useState<Part>("thesis")

  const wordCount = Object.values(texts).join(" ").trim().split(/\s+/).filter(Boolean).length
  const isEnough = wordCount >= 70

  function insertCliche(cliche: string) {
    const filled = concept ? cliche.replace(/\[ПОНЯТИЕ\]/g, concept) : cliche
    setTexts(prev => ({ ...prev, [activeTab]: prev[activeTab] ? prev[activeTab] + " " + filled : filled }))
  }

  function handleText(val: string) {
    setTexts(prev => ({ ...prev, [activeTab]: val }))
  }

  const activePart = PARTS.find(p => p.key === activeTab)!

  return (
    <div className="w-full space-y-4">
      {/* Concept input */}
      <div className="flex gap-3 items-center">
        <div className="relative flex-1">
          <input
            type="text"
            value={concept}
            onChange={e => setConcept(e.target.value)}
            placeholder="Введи ключевое понятие (например: доброта, мужество, дружба…)"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-400 text-sm font-open-sans-custom focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>
        <div className={cn(
          "px-3 py-2 rounded-lg border text-xs font-mono font-bold transition-colors",
          isEnough ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300" : "bg-white/5 border-white/10 text-gray-400"
        )}>
          {wordCount} / 70 слов
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
        {PARTS.map(part => (
          <button
            key={part.key}
            onClick={() => setActiveTab(part.key)}
            className={cn(
              "rounded-lg border px-3 py-2 text-xs font-open-sans-custom text-left transition-all",
              activeTab === part.key
                ? cn(part.color, "text-white")
                : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
            )}
          >
            <div className="font-semibold leading-tight">{part.label}</div>
            <div className={cn("mt-0.5 text-[10px] truncate", activeTab === part.key ? "text-white/60" : "text-gray-500")}>
              {texts[part.key] ? `${texts[part.key].trim().split(/\s+/).length} сл.` : "пусто"}
            </div>
          </button>
        ))}
      </div>

      {/* Editor area */}
      <div className={cn("relative rounded-lg border-2 overflow-hidden backdrop-blur-sm", activePart.color)}>
        <DotPattern width={5} height={5} />
        <div className="relative z-10 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <Badge className="bg-white/10 text-white border-white/20 text-xs">{activePart.label}</Badge>
            <span className="text-xs text-gray-400 font-open-sans-custom">{activePart.hint}</span>
          </div>
          <textarea
            value={texts[activeTab]}
            onChange={e => handleText(e.target.value)}
            placeholder="Начни писать здесь или вставь клише ниже…"
            rows={5}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 text-sm font-open-sans-custom focus:outline-none focus:border-white/40 transition-colors resize-none"
          />
          <div className="space-y-1">
            <p className="text-xs text-gray-500 font-open-sans-custom uppercase tracking-wider">Вставить клише:</p>
            <div className="flex flex-col gap-1.5">
              {CLICHE[activeTab].map((c, i) => (
                <button
                  key={i}
                  onClick={() => insertCliche(c)}
                  className="text-left text-xs text-gray-300 hover:text-white font-open-sans-custom italic border border-white/10 rounded px-3 py-1.5 hover:bg-white/10 transition-colors"
                >
                  «{concept ? c.replace(/\[ПОНЯТИЕ\]/g, concept) : c}»
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      {Object.values(texts).some(Boolean) && (
        <div className="relative rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <DotPattern width={5} height={5} />
          <div className="relative z-10 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <Badge className="bg-white/10 text-white border-white/20 text-xs">Предварительный просмотр</Badge>
              <span className={cn("text-xs font-mono", isEnough ? "text-emerald-400" : "text-gray-400")}>
                {isEnough ? "✓ объём достаточный" : `нужно ещё ~${70 - wordCount} слов`}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-200 font-open-sans-custom leading-relaxed">
              {PARTS.map(part => texts[part.key] ? (
                <p key={part.key}>{texts[part.key]}</p>
              ) : null)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
