import { useState } from 'react'
import { CheckCircle2, Cog, HardHat, Handshake, Quote, ShieldCheck, Zap } from 'lucide-react'
import ContactSection from '../components/ContactSection'
import Button from '../components/Button'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import aboutImage from '../assets/images/about-team.svg'
import { projects, type Project } from '../data/projects'
import { services } from '../data/services'
import { testimonials } from '../data/site'

const highlights = [
  {
    icon: Cog,
    title: 'Mechanical expertise',
    description: 'We design and supervise mechanical systems, equipment layouts, and industrial plant upgrades that perform reliably.',
  },
  {
    icon: Zap,
    title: 'Electrical solutions',
    description: 'From power distribution to solar integration, our electrical designs are safe, efficient, and code-compliant.',
  },
  {
    icon: HardHat,
    title: 'Civil & structural work',
    description: 'We deliver structures, infrastructure, and site development engineered for safety, durability, and buildability.',
  },
  {
    icon: ShieldCheck,
    title: 'Site supervision',
    description: 'Independent inspection and quality assurance ensure designs are built as intended, on schedule and on budget.',
  },
]

const processSteps = [
  { title: 'Brief', description: 'Understand your project goals, site conditions, constraints, and desired outcomes.' },
  { title: 'Design', description: 'Develop concepts, calculations, and drawings across the relevant disciplines.' },
  { title: 'Approve', description: 'Deliver clear documentation and support regulatory submissions or tender packages.' },
  { title: 'Deliver', description: 'Supervise construction, inspect works, and hand over a compliant, quality-built project.' },
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <SEO
        title="AMDARPreneur | Mechanical, Electrical & Civil Engineering"
        description="AMDARPreneur provides mechanical, electrical, and civil engineering services — design, structural analysis, project management, site supervision, and maintenance for buildings, infrastructure, and industry."
      />

      <Hero />

      <section className="section-padding">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-moss">Who we are</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-forest text-balance sm:text-4xl lg:text-5xl">
              Engineering that connects design ambition with buildable reality.
            </h2>
            <p className="mt-6 text-base leading-8 text-forest/65 sm:text-lg">
              AMDARPreneur is an engineering practice delivering mechanical, electrical, and civil engineering services for buildings, infrastructure, and industrial projects.
            </p>
            <p className="mt-4 text-base leading-8 text-forest/65 sm:text-lg">
              We believe lasting structures and systems are built through rigorous design, code compliance, capable teams, and careful supervision on site.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Tailored project scoping', 'Locally relevant engineering', 'Focus on safe, buildable outcomes'].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-lime/50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-moss" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-6 text-forest/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <Button to="/about" variant="outline">Learn about our company</Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-leaf/40 to-mustard/20 blur-2xl" aria-hidden="true" />
              <img src={aboutImage} alt="Visual representation of AMDARPreneur's engineering disciplines" className="relative w-full rounded-[2rem] shadow-soft" />
              <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-forest/10 bg-white p-5 shadow-card sm:left-10 sm:right-auto sm:w-80">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green text-white">
                    <Handshake className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-forest">Multi-discipline team</p>
                    <p className="text-xs text-forest/55">Mechanical, electrical & civil</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-lime/35 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title="Engineering services across mechanical, electrical, and civil disciplines."
            description="From system design and structural analysis to project management and site supervision, we deliver integrated engineering for buildings, infrastructure, and industry."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg">View all services</Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Work that turns engineering into reality."
              description="Explore selected projects across mechanical, electrical, civil, and multi-discipline engineering."
              align="left"
              className="max-w-2xl"
            />
            <Button to="/projects" variant="outline" className="shrink-0">View all projects</Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="An engineering team focused on safe, durable outcomes."
            description="We combine rigorous technical expertise with practical site experience, so every design is buildable and every build is inspected."
            dark
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:bg-white/10">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf/15 text-leaf">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-lime/70">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear process from brief to handover."
            description="Every project is structured to reduce uncertainty, coordinate disciplines, and deliver quality on site."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90}>
                <div className="relative h-full rounded-[1.75rem] border border-forest/10 bg-white p-7 shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple/10 font-display text-lg font-extrabold text-purple">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-forest">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-forest/60">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lime/35 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted perspectives from our clients."
            description="Placeholder testimonials are shown until verified client feedback is added to the project content."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 80}>
                <figure className="flex h-full flex-col rounded-[1.75rem] border border-forest/10 bg-white p-7 shadow-card">
                  <Quote className="h-8 w-8 text-green" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 text-sm leading-7 text-forest/70">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-7 border-t border-forest/10 pt-5">
                    <p className="font-bold text-forest">{testimonial.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
