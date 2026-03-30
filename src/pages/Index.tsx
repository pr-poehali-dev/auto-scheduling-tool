import { LiquidMetalBackground } from "@/components/LiquidMetalBackground"
import { FloatingNavbar } from "@/components/FloatingNavbar"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Feature } from "@/components/ui/feature-with-advantages"
import { BentoPricing } from "@/components/ui/bento-pricing"
import { ContactCard } from "@/components/ui/contact-card"
import { AboutQuote } from "@/components/ui/about-quote"
import { EssayConstructor } from "@/components/ui/essay-constructor"
import { EssayExamples } from "@/components/ui/essay-examples"
import { EssayMistakes } from "@/components/ui/essay-mistakes"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

const TOTAL_SECTIONS = 7

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>(Array(TOTAL_SECTIONS).fill(null))

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY
      const currentScroll = scrollContainer.scrollLeft
      const containerWidth = scrollContainer.offsetWidth
      const currentSection = Math.round(currentScroll / containerWidth)

      // Sections with internal vertical scroll: 2,3,4,5,6
      const verticalSections = [2, 3, 4, 5, 6]
      if (verticalSections.includes(currentSection)) {
        const sectionEl = sectionRefs.current[currentSection]
        if (sectionEl) {
          const isAtTop = sectionEl.scrollTop === 0
          const isAtBottom = sectionEl.scrollTop + sectionEl.clientHeight >= sectionEl.scrollHeight - 1

          if (delta > 0 && !isAtBottom) return
          if (delta < 0 && !isAtTop) return

          if (delta < 0 && isAtTop) {
            e.preventDefault()
            scrollContainer.scrollTo({ left: (currentSection - 1) * containerWidth, behavior: "smooth" })
            return
          }
          if (delta > 0 && isAtBottom) {
            if (currentSection < TOTAL_SECTIONS - 1) {
              e.preventDefault()
              scrollContainer.scrollTo({ left: (currentSection + 1) * containerWidth, behavior: "smooth" })
            } else {
              e.preventDefault()
            }
            return
          }
        }
      }

      e.preventDefault()
      if (Math.abs(delta) > 10) {
        const targetSection = delta > 0
          ? Math.min(currentSection + 1, TOTAL_SECTIONS - 1)
          : Math.max(currentSection - 1, 0)
        scrollContainer.scrollTo({ left: targetSection * containerWidth, behavior: "smooth" })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el
  }

  const dotPattern = (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 z-0 size-full pointer-events-none",
        "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
        "bg-[size:12px_12px]",
        "opacity-30",
      )}
    />
  )

  return (
    <main className="relative h-screen overflow-hidden">
      <LiquidMetalBackground />
      <div className="fixed inset-0 z-[5] bg-black/50" />
      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* 0 — Герой */}
        <section id="home" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center px-0 leading-5">
              <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
                <span className="font-open-sans-custom not-italic">Тезис.</span>{" "}
                <span className="font-serif italic">Аргумент.</span>{" "}
                <span className="font-open-sans-custom not-italic">Вывод.</span>
              </h1>
              <p className="mb-8 mx-auto max-w-2xl text-pretty leading-relaxed text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide text-xl">
                Задание 13 ОГЭ по русскому языку — три вида сочинений-рассуждений.{" "}
                <span className="font-serif italic">Разберём</span> каждый тип, алгоритм, клише и типичные ошибки
              </p>
              <div className="flex justify-center">
                <ShinyButton className="px-8 py-3 text-base">изучить</ShinyButton>
              </div>
            </div>
          </div>
        </section>

        {/* 1 — Типы сочинений */}
        <section id="features" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-7xl w-full">
            <Feature />
          </div>
        </section>

        {/* 2 — Алгоритм 13.3 */}
        <section
          id="pricing"
          ref={setRef(2)}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dotPattern}
          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Алгоритм 13.3
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Пошаговый план написания сочинения-рассуждения по заданию 13.3 ОГЭ по русскому языку.
              </p>
            </div>
            <BentoPricing />
          </div>
        </section>

        {/* 3 — Клише */}
        <section
          id="about"
          ref={setRef(3)}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dotPattern}
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Клише
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Готовые фразы-шаблоны для каждой части сочинения 13.3 — используй их как опору.
              </p>
            </div>
            <AboutQuote />
          </div>
        </section>

        {/* 4 — Конструктор */}
        <section
          id="constructor"
          ref={setRef(4)}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dotPattern}
          <div className="relative z-10 mx-auto w-full max-w-4xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Конструктор
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Напиши сочинение прямо здесь — по частям, с подсказками и клише. Следи за объёмом.
              </p>
            </div>
            <EssayConstructor />
          </div>
        </section>

        {/* 5 — Примеры сочинений */}
        <section
          id="examples"
          ref={setRef(5)}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dotPattern}
          <div className="relative z-10 mx-auto w-full max-w-4xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Примеры
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Три готовых сочинения 13.3 с разбором структуры — учись на конкретных образцах.
              </p>
            </div>
            <EssayExamples />
          </div>
        </section>

        {/* 6 — Типичные ошибки */}
        <section
          id="contact"
          ref={setRef(6)}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dotPattern}
          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Типичные ошибки
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Разбираем 6 самых частых ошибок с примерами «как нельзя» и «как правильно».
              </p>
            </div>
            <EssayMistakes />
          </div>
        </section>
      </div>
    </main>
  )
}
