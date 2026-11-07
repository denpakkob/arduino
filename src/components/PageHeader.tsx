import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SectionHeading from './SectionHeading'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
  backTo?: string
  backLabel?: string
}

export default function PageHeader({ eyebrow, title, description, backTo = '/', backLabel = 'Back to home' }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-forest pb-20 pt-36 text-white sm:pb-24 sm:pt-44">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <Link to={backTo} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-lime/75 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {backLabel}
        </Link>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" dark />
      </div>
    </section>
  )
}
