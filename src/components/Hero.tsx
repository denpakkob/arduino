import { Building2, Cog, Zap } from 'lucide-react'
import Button from './Button'
import heroImage from '../assets/images/hero.svg'

const stats = [
  { value: '3', label: 'Engineering disciplines' },
  { value: '6', label: 'Service areas' },
  { value: '100%', label: 'Tailored scoping' },
]

const trustItems = [
  { icon: Cog, label: 'Mechanical' },
  { icon: Zap, label: 'Electrical' },
  { icon: Building2, label: 'Civil' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
      <div className="absolute -left-32 top-24 h-[28rem] w-[28rem] rounded-full bg-green/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-leaf/10 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(225,240,188,0.08)_1px,transparent_0)] bg-[size:28px_28px]" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-leaf/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-lime backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-mustard" aria-hidden="true" />
            Mechanical · Electrical · Civil Engineering
          </div>
          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            Engineering Solutions Built to Last.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-lime/75 sm:text-xl">
            Your trusted partner in mechanical, electrical, and civil engineering — from concept design to site supervision.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button to="/projects" variant="light" size="lg">
              Explore Our Projects
            </Button>
            <Button to="/#contact" variant="outlineDark" size="lg">
              Request a Quote
            </Button>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-5 text-center sm:px-6">
                <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-lime/60 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '150ms' }}>
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-leaf/25 via-transparent to-mustard/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <img src={heroImage} alt="Abstract visual representing mechanical, electrical, and civil engineering" className="w-full rounded-[1.5rem]" />
          </div>
          <div className="absolute -left-5 bottom-10 hidden rounded-2xl border border-white/15 bg-forest/85 px-5 py-4 shadow-xl backdrop-blur sm:block">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime/60">What we do</p>
            <div className="mt-3 flex gap-4">
              {trustItems.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  <Icon className="h-4 w-4 text-leaf" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -right-4 top-8 rounded-full bg-mustard px-5 py-3 text-sm font-bold text-forest shadow-xl">
            Coordinated engineering
          </div>
        </div>
      </div>
    </section>
  )
}
