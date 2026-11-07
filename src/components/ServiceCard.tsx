import { CheckCircle2 } from 'lucide-react'
import type { Service } from '../data/services'
import Button from './Button'

const accentStyles = {
  green: 'bg-lime text-moss',
  indigo: 'bg-indigo/10 text-indigo',
  purple: 'bg-purple/10 text-purple',
  mustard: 'bg-mustard/15 text-mustard',
} as const

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-forest/10 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-green/30 hover:shadow-soft">
      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 ${accentStyles[service.accent]}`}>
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mt-6 font-display text-xl font-extrabold text-forest sm:text-2xl">{service.title}</h3>
      <p className="mt-3 text-sm font-semibold leading-7 text-moss">{service.summary}</p>
      <p className="mt-4 text-sm leading-7 text-forest/65">{service.description}</p>
      <ul className="mt-6 space-y-3 border-t border-forest/10 pt-6">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-sm text-forest/75">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button to="/#contact" variant="secondary" size="sm" className="w-full sm:w-auto">
          Discuss this service
        </Button>
      </div>
    </article>
  )
}
