import { Badge } from "@/components/ui/badge"
import DotPattern from "@/components/ui/dot-pattern"

const types = [
  {
    badge: "13.1",
    title: "Лингвистическая тема",
    what: "Вопрос о языковом явлении",
    args: "Два примера из текста",
    note: "Знание языковых явлений: знаки препинания, стилистические фигуры. Используй публицистический и научный стили речи.",
  },
  {
    badge: "13.2",
    title: "Высказывание автора",
    what: "Выдержка из текста",
    args: "Два примера из текста",
    note: "Пойми общий смысл фрагмента и объясни его, затем подтверди примерами. Например: «Объясни смысл фрагмента…»",
  },
  {
    badge: "13.3",
    title: "Понятие / Слово",
    what: "Слово или словосочетание из текста",
    args: "Один из текста + один из жизни (или оба из текста)",
    note: "Философские и нравственные вопросы: счастье, сила духа, человечность. Дай определение понятия и прокомментируй его.",
  },
]

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Задание 13</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Три типа сочинений
            </h2>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Все пишутся с опорой на текст. Объём — не менее 70 слов. Структура: тезис → аргументы → вывод.
            </p>
          </div>

          <div className="w-full pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {types.map((t) => (
              <div
                key={t.badge}
                className="relative rounded-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm p-5 flex flex-col gap-3 overflow-hidden"
              >
                <DotPattern width={5} height={5} />
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-2xl font-mono font-bold text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
                    {t.badge}
                  </span>
                  <Badge className="bg-white/10 text-white border-white/20 text-xs">{t.title}</Badge>
                </div>
                <div className="relative z-10 space-y-2">
                  <div>
                    <p className="text-xs text-gray-400 font-open-sans-custom uppercase tracking-wider">Что интерпретировать</p>
                    <p className="text-sm text-white font-open-sans-custom mt-0.5">{t.what}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-open-sans-custom uppercase tracking-wider">Аргументы</p>
                    <p className="text-sm text-white font-open-sans-custom mt-0.5">{t.args}</p>
                  </div>
                  <div className="pt-1 border-t border-white/10">
                    <p className="text-xs text-gray-300 font-open-sans-custom leading-relaxed">{t.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full mt-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-3">
            <p className="text-xs text-gray-300 font-open-sans-custom leading-relaxed">
              <span className="text-white font-semibold">Важно:</span> нельзя переписывать или пересказывать исходный текст без комментариев — такая работа оценивается нулём баллов.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }
