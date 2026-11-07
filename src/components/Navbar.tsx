import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
import logo from '../assets/logos/logo.jpeg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'border-b border-forest/10 bg-white/90 shadow-soft backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <img src={logo} alt="" className="h-11 w-11" />
          <span className="font-display text-lg font-extrabold leading-tight text-forest sm:text-xl">
            AMDAR<span className="text-moss">Preneur</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-forest/55">Engineering</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`group relative text-sm font-semibold transition-colors ${
                  active ? 'text-moss' : 'text-forest/70 hover:text-forest'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-green transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
          <Link
            to="/#contact"
            className="rounded-full bg-green px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-moss focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green/40"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/10 bg-white/80 text-forest shadow-sm transition hover:bg-lime lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-forest/10 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-5">
          {links.map((link) => {
            const active = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                  active ? 'bg-lime text-moss' : 'text-forest/75 hover:bg-lime/50 hover:text-forest'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/#contact"
            className="mt-3 rounded-full bg-green px-5 py-3 text-center text-sm font-bold text-white shadow-soft"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
