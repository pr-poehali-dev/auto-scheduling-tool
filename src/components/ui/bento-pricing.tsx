import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import DotPattern from "@/components/ui/dot-pattern"

const steps = [
  {
    num: "01",
    title: "Ознакомление со структурой",
    desc: "Сочинение состоит из трёх частей: вступления, основной части и заключения.",
    span: "lg:col-span-3",
  },
  {
    num: "02",
    title: "Вступление (тезис)",
    desc: "Ответь на проблемный вопрос и сформулируй значение заданного понятия. Это и есть тезис.",
    span: "lg:col-span-5",
  },
  {
    num: "03",
    title: "Основная часть (аргументы)",
    desc: "Два аргумента: один из предложенного текста, другой — из личного опыта. Или оба из текста. Последовательность — любая.",
    span: "lg:col-span-4",
  },
  {
    num: "04",
    title: "Заключение (вывод)",
    desc: "Итог рассуждения. Должен напрямую соотноситься с тезисом из первого абзаца.",
    span: "lg:col-span-4",
  },
]

const tips = [
  "Тезис формулируй чётко — расплывчатый тезис = потеря баллов",
  "Пример должен содержать детали, понятные без обращения к тексту",
  "После примера — обязательно мини-вывод, не просто пересказ",
  "Используй клише — они помогут структурировать мысль",
]

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      {steps.map((s) => (
        <div
          key={s.num}
          className={cn(
            "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2 backdrop-blur-sm p-5",
            s.span,
          )}
        >
          <DotPattern width={5} height={5} />
          <div className="relative z-10 flex flex-col gap-2">
            <span className="font-mono text-4xl font-bold text-white/20">{s.num}</span>
            <p className="text-white font-open-sans-custom font-semibold text-base">{s.title}</p>
            <p className="text-gray-300 text-sm font-open-sans-custom leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}

      <div className="lg:col-span-8 bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2 backdrop-blur-sm p-5">
        <DotPattern width={5} height={5} />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-white/10 text-white border-white/20 text-xs">Рекомендации</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-white/40 font-mono text-xs mt-0.5">→</span>
                <p className="text-gray-300 text-sm font-open-sans-custom leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
