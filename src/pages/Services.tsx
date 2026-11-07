import { CheckCircle2, MessageSquareText, Route, SearchCheck, Settings2 } from 'lucide-react'
import Button from '../components/Button'
import ContactSection from '../components/ContactSection'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const engagementSteps = [
  { icon: MessageSquareText, title: 'Brief', description: 'We learn about your project, goals, site conditions, constraints, and desired outcomes.' },
  { icon: SearchCheck, title: 'Assessment', description: 'We review site information, requirements, regulations, and technical constraints.' },
  { icon: Route, title: 'Design', description: 'We deliver calculations, drawings, and a clear documentation package for approval or tender.' },
  { icon: Settings2, title: 'Site support', description: 'We support construction through inspections, reviews, reporting, and follow-up.' },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Services | AMDARPreneur Engineering"
        description="Explore AMDARPreneur engineering services including mechanical engineering, electrical engineering, civil engineering, structural design, project management, and maintenance."
      />
      <PageHeader
        eyebrow="Engineering Services"
        title="Multi-discipline engineering for buildings, infrastructure, and industry."
        description="Choose a focused service or combine disciplines into a coordinated engineering package that matches your project scope and site conditions."
        backTo="/"
        backLabel="Back to home"
      />

      <section className="section-padding">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Offer"
            title="Services designed around real project needs."
            description="Each discipline can be engaged independently or coordinated into a single, buildable engineering package."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index, 5) * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lime/35 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Approach"
            title="A structured path from brief to handover."
            description="Our engineering process is designed to produce safe, code-compliant, buildable deliverables."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title} delay={index * 90}>
                  <div className="relative h-full rounded-[1.75rem] border border-forest/10 bg-white p-7 shadow-card">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-moss">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm font-extrabold text-forest/20">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-forest">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-forest/60">{step.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-x rounded-[2rem] bg-forest p-8 text-center text-white shadow-soft sm:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-leaf">Need engineering support?</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
            Let’s scope the right engineering package for your project.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-lime/70 sm:text-base">
            Book an initial consultation and we will help you clarify scope, disciplines, and next steps.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/#contact" variant="light" size="lg">Request a Quote</Button>
            <Button to="/faq" variant="outlineDark" size="lg">
              Read FAQs
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-lime/65">
            {['Tailored proposals', 'Flexible delivery formats', 'Site supervision support'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-leaf" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
