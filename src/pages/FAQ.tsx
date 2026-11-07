import { MessageCircle } from 'lucide-react'
import Button from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { faqCategories } from '../data/faq'

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ | AMDARPreneur Engineering"
        description="Find answers about AMDARPreneur engineering services, project processes, pricing, site visits, and general enquiries."
      />
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="Clear answers before we begin."
        description="Learn how our engineering services work, what to expect during projects, and how to get started."
        backTo="/"
        backLabel="Back to home"
      />

      <section className="section-padding">
        <div className="container-x max-w-5xl">
          <div className="grid gap-6">
            {faqCategories.map((category, index) => (
              <Reveal key={category.title} delay={Math.min(index, 4) * 70}>
                <FAQAccordion category={category} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-forest/10 bg-white p-8 shadow-card sm:flex sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple/10 text-purple">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-xl font-extrabold text-forest sm:text-2xl">Still have questions?</h2>
                <p className="mt-2 text-sm leading-7 text-forest/60">
                  Contact our team for guidance on services, projects, pricing, or booking a site visit.
                </p>
              </div>
            </div>
            <Button to="/#contact" variant="secondary" size="lg" className="mt-6 w-full shrink-0 sm:mt-0 sm:w-auto">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
