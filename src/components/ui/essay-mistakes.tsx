import { Badge } from "@/components/ui/badge"
import DotPattern from "@/components/ui/dot-pattern"

const MISTAKES = [
  {
    num: "01",
    title: "Пересказ вместо анализа",
    bad: "В тексте мальчик помог старушке донести сумки.",
    good: "В предложении 7 автор показывает, что мальчик, не задумываясь, помог старушке — это и есть проявление настоящей доброты.",
    rule: "Пересказ без комментария = 0 баллов. Всегда добавляй: «это говорит о…», «автор показывает…»",
  },
  {
    num: "02",
    title: "Расплывчатый тезис",
    bad: "Доброта — это очень хорошее качество, которое нужно людям.",
    good: "Доброта — это способность человека бескорыстно помогать другим, не ожидая ничего взамен.",
    rule: "Тезис должен содержать чёткое определение понятия. Избегай слов «хорошее», «важное», «нужное» без конкретики.",
  },
  {
    num: "03",
    title: "Вывод не связан с тезисом",
    bad: "Таким образом, нужно быть добрым человеком и помогать друг другу.",
    good: "Таким образом, доброта — это бескорыстная забота о других, которая делает мир теплее.",
    rule: "Вывод должен «отвечать» тезису: возьми ключевые слова из определения и повтори их в финале.",
  },
  {
    num: "04",
    title: "Слишком короткое сочинение",
    bad: "Работа из 50 слов, даже с правильной структурой.",
    good: "Работа из 70+ слов с развёрнутыми аргументами и анализом.",
    rule: "Минимум 70 слов — обязательное требование. Расширяй аргументы: добавляй детали, анализ, мини-выводы.",
  },
  {
    num: "05",
    title: "Аргумент без анализа",
    bad: "Я видел, как друг помог мне. Это была дружба.",
    good: "Когда я заболел, друг каждый день приносил задания и объяснял темы. Именно эта готовность помочь в трудную минуту и есть настоящая дружба.",
    rule: "После примера обязательно сделай мини-вывод: объясни, как этот случай доказывает твой тезис.",
  },
  {
    num: "06",
    title: "Запрещённые жанры в аргументах",
    bad: "Как пример приведу комикс / аниме / компьютерную игру…",
    good: "Аргумент из личного опыта, литературы, фильма, реальных событий.",
    rule: "Для 13.3 нельзя использовать комиксы, аниме, мангу, фанфики, графические романы и игры как источник примеров.",
  },
]

export function EssayMistakes() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
      {MISTAKES.map((m) => (
        <div
          key={m.num}
          className="relative rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
        >
          <DotPattern width={5} height={5} />
          <div className="relative z-10 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl font-bold text-white/20">{m.num}</span>
              <p className="text-white font-open-sans-custom font-semibold text-sm leading-tight">{m.title}</p>
            </div>

            <div className="space-y-2">
              <div className="rounded-md bg-red-500/10 border border-red-400/20 px-3 py-2">
                <p className="text-xs text-red-300/70 font-open-sans-custom uppercase tracking-wider mb-1">Так нельзя</p>
                <p className="text-sm text-red-200 font-open-sans-custom italic leading-relaxed">«{m.bad}»</p>
              </div>
              <div className="rounded-md bg-emerald-500/10 border border-emerald-400/20 px-3 py-2">
                <p className="text-xs text-emerald-300/70 font-open-sans-custom uppercase tracking-wider mb-1">Правильно</p>
                <p className="text-sm text-emerald-200 font-open-sans-custom italic leading-relaxed">«{m.good}»</p>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1 border-t border-white/10">
              <Badge className="bg-white/10 text-white border-white/20 text-[10px] flex-shrink-0 mt-0.5">Правило</Badge>
              <p className="text-xs text-gray-300 font-open-sans-custom leading-relaxed">{m.rule}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
