import { CheckCircle2, Eye, Flag, User } from 'lucide-react'
import Button from '../components/Button'
import ContactSection from '../components/ContactSection'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { companyProfile, companyStrengths, companyValues, whyChooseUs } from '../data/company'
import { teamMembers } from '../data/site'
import aboutImage from '../assets/images/about-team.svg'

export default function About() {
  return (
    <>
      <SEO
        title="About Us | AMDARPreneur Engineering"
        description="Learn about AMDARPreneur, our vision, mission, values, engineering strengths, and team approach to delivering mechanical, electrical, and civil engineering services."
      />
      <PageHeader
        eyebrow="About Us"
        title="Engineering across mechanical, electrical, and civil disciplines."
        description="AMDARPreneur supports buildings, infrastructure, and industry with design, analysis, project management, and site supervision."
        backTo="/"
        backLabel="Back to home"
      />

      <section className="section-padding">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-moss">Our Story</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-forest text-balance sm:text-4xl lg:text-5xl">
              An engineering practice built around safe, durable delivery.
            </h2>
            <p className="mt-6 text-base leading-8 text-forest/65 sm:text-lg">{companyProfile.introduction}</p>
            <p className="mt-4 text-base leading-8 text-forest/65 sm:text-lg">{companyProfile.background}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-green/20 bg-lime/50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">Engineering approach</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-forest/75">Rigorous, coordinated, and buildable.</p>
              </div>
              <div className="rounded-3xl border border-green/20 bg-lime/50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">Client focus</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-forest/75">Contractors, developers, owners, and public clients.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-green/20 to-mustard/20 blur-2xl" aria-hidden="true" />
              <img src={aboutImage} alt="Visual representation of the AMDARPreneur engineering team and disciplines" className="relative w-full rounded-[2rem] shadow-soft" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-20 text-white sm:py-24">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf/15 text-leaf">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">Our Vision</h2>
              <p className="mt-4 text-base leading-8 text-lime/75">{companyProfile.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mustard/20 text-mustard">
                <Flag className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">Our Mission</h2>
              <p className="mt-4 text-base leading-8 text-lime/75">{companyProfile.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles behind our engineering work."
            description="Our values guide how we design, document, supervise, and deliver every project."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={Math.min(index, 5) * 70}>
                  <div className="h-full rounded-[1.75rem] border border-forest/10 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-moss">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-forest">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-forest/60">{value.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-lime/35 py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Our Strengths"
              title="Why clients choose AMDARPreneur."
              description="We combine technical depth with practical delivery to help projects move from concept to completion."
              align="left"
            />
            <div className="mt-8 space-y-4">
              {companyStrengths.map((strength) => (
                <div key={strength} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-moss" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-6 text-forest/80">{strength}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="h-full rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-card">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-purple/10 text-purple">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-forest">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-forest/60">{item.description}</p>
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
            eyebrow="Our Team"
            title="Engineers committed to safe, buildable work."
            description="Team profiles are placeholders and can be updated with real names, photos, credentials, and biographies."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 80}>
                <article className="h-full rounded-[1.75rem] border border-forest/10 bg-white p-7 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-lime text-moss">
                    <User className="h-9 w-9" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-forest">{member.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-moss">{member.role}</p>
                  {member.bio && <p className="mt-4 text-sm leading-6 text-forest/60">{member.bio}</p>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-forest p-8 text-center text-white shadow-soft sm:p-12 lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Ready to start your next engineering project?</h2>
              <p className="mt-3 text-sm leading-7 text-lime/70 sm:text-base">
                Contact us to discuss your project, site conditions, and the engineering disciplines you need.
              </p>
            </div>
            <Button to="/#contact" variant="light" size="lg" className="shrink-0">
              Start a conversation
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
