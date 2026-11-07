import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import ContactForm from './ContactForm'
import SectionHeading from './SectionHeading'
import { site } from '../data/site'

export default function ContactSection() {
  const contactMethods = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with our team', href: `https://wa.me/${site.whatsappNumber}` },
    { icon: MapPin, label: 'Location', value: site.address },
    { icon: Clock3, label: 'Response time', value: 'Within 1–2 business days' },
  ]

  return (
    <section id="contact" className="scroll-mt-24 bg-lime/40 section-padding">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let’s build your next engineering project."
            description="Tell us what you want to achieve. We will help you identify the right disciplines and engineering scope."
            align="left"
          />
          <div className="mt-8 space-y-4">
            {contactMethods.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-moss shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-forest/50">{item.label}</span>
                    <span className="mt-1 block text-sm font-semibold text-forest">{item.value}</span>
                  </span>
                </>
              )

              return item.href ? (
                <a key={item.label} href={item.href} target={item.label === 'WhatsApp' ? '_blank' : undefined} rel={item.label === 'WhatsApp' ? 'noreferrer' : undefined} className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-white/70 p-4 transition hover:border-green/40 hover:bg-white">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-white/70 p-4">
                  {content}
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-soft sm:p-9">
          <h2 className="font-display text-2xl font-extrabold text-forest sm:text-3xl">Send us an enquiry</h2>
          <p className="mt-3 text-sm leading-7 text-forest/60">
            Share your project goals, site details, and preferred engagement format. We will reply with next steps.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
