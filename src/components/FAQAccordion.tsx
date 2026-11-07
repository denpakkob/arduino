import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import type { FaqCategory } from '../data/faq'

export default function FAQAccordion({ category }: { category: FaqCategory }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0])
  const categorySlug = category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  const toggle = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    )
  }

  return (
    <section className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-card sm:p-8" aria-labelledby={`faq-${categorySlug}`}>
      <h2 id={`faq-${categorySlug}`} className="font-display text-2xl font-extrabold text-forest">
        {category.title}
      </h2>
      <div className="mt-6 divide-y divide-forest/10">
        {category.questions.map((item, index) => {
          const isOpen = openIndexes.includes(index)
          const buttonId = `faq-button-${categorySlug}-${index}`
          const panelId = `faq-panel-${categorySlug}-${index}`

          return (
            <div key={item.question} className="py-4 first:pt-0 last:pb-0">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-5 rounded-xl text-left text-base font-bold text-forest transition hover:text-moss sm:text-lg"
                >
                  <span>{item.question}</span>
                  <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen ? 'bg-green text-white' : 'bg-lime text-moss'}`}>
                    {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="pt-4 pr-10 text-sm leading-7 text-forest/65 sm:text-base">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
