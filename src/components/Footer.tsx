import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { services } from '../data/services'
import { site } from '../data/site'
import logo from '../assets/logos/logo.svg'

const socialIcons = {
  LinkedIn: Linkedin,
  Facebook,
  Instagram,
  X: Twitter,
}

export default function Footer() {
  return (
    <footer className="bg-forest text-lime/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="" className="h-11 w-11" />
            <span className="font-display text-xl font-extrabold text-white">
              AMDAR<span className="text-leaf">Preneur</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7">
            Multi-discipline engineering for buildings, infrastructure, and industry — mechanical, electrical, and civil.
          </p>
          <div className="mt-6 flex gap-3">
            {site.socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lime transition hover:bg-green hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: 'Home', to: '/' },
              { label: 'Projects', to: '/projects' },
              { label: 'Services', to: '/services' },
              { label: 'About Us', to: '/about' },
              { label: 'FAQ', to: '/faq' },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link to="/services" className="transition hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="transition hover:text-white">{site.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-lime/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Engineering for safe, durable, buildable projects.</p>
        </div>
      </div>
    </footer>
  )
}
