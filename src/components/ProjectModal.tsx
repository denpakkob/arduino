import { useEffect, useRef } from 'react'
import { CalendarDays, CheckCircle2, MapPin, X } from 'lucide-react'
import type { Project } from '../data/projects'
import Button from './Button'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6" role="presentation">
      <button type="button" className="absolute inset-0 bg-forest/70 backdrop-blur-sm" aria-label="Close project details" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl sm:rounded-[2rem]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-forest shadow-sm transition hover:bg-lime"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>

        <img src={project.image} alt={`${project.title} project visual`} className="aspect-[16/9] w-full object-cover" />
        <div className="p-6 sm:p-9">
          <div className="flex flex-wrap gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${project.status === 'Completed' ? 'bg-leaf text-forest' : 'bg-mustard text-forest'}`}>
              {project.status}
            </span>
            <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-moss">{project.category}</span>
          </div>
          <h2 id="project-modal-title" className="mt-5 font-display text-3xl font-extrabold text-forest sm:text-4xl">
            {project.title}
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-forest/60">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-moss" />{project.location}</span>
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-moss" />{project.completedDate}</span>
          </div>
          <p className="mt-6 text-base leading-8 text-forest/70">{project.description}</p>
          <h3 className="mt-8 font-display text-xl font-bold text-forest">Key outcomes</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 rounded-2xl bg-lime/50 p-4 text-sm leading-6 text-forest/75">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-moss" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/#contact" onClick={onClose} className="w-full sm:w-auto">Discuss a similar project</Button>
            <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">Close details</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
