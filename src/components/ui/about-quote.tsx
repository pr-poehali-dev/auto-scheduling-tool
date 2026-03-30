import DotPattern from "@/components/ui/dot-pattern"
import { Badge } from "@/components/ui/badge"

const clicheSections = [
  {
    label: "Вступление",
    items: [
      "Что такое …? Попробуем поразмышлять над значением этого понятия.",
      "По моему мнению, … — это…",
      "Я думаю, что … — это…",
      "Текст [ФИО] заставил меня задуматься над…",
      "Это нравственное понятие рассматривали многие писатели, поэты и философы.",
    ],
  },
  {
    label: "Основная часть",
    items: [
      "Проиллюстрировать это понятие можно на примере из текста. Так, в предложении…",
      "Чтобы подтвердить сказанное, обратимся к тексту.",
      "Обратимся к тексту, в котором говорится о…",
      "В своём тексте автор поднимает очень важную проблему.",
      "Автор говорит… подчёркивает… размышляет… делает акцент…",
      "Своё мнение я могу подтвердить примером из…",
    ],
  },
  {
    label: "Заключение",
    items: [
      "Таким образом,…",
      "В результате рассуждения мы приходим к выводу о том, что…",
      "Подводя итог своим размышлениям, хочу сказать…",
    ],
  },
]

export function AboutQuote() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative flex flex-col items-stretch border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5 overflow-hidden">
        <DotPattern width={5} height={5} />

        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white/80" />

        <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {clicheSections.map((section) => (
            <div key={section.label} className="p-6 md:p-8 flex flex-col gap-4">
              <Badge className="bg-white/10 text-white border-white/20 w-fit">{section.label}</Badge>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white/30 font-mono text-xs mt-1 flex-shrink-0">›</span>
                    <p className="text-sm text-gray-300 font-open-sans-custom leading-relaxed italic">«{item}»</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
