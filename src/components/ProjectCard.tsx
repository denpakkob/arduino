import { CalendarDays, MapPin } from 'lucide-react'
import type { Project } from '../data/projects'
import Button from './Button'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project visual`}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${project.status === 'Completed' ? 'bg-leaf text-forest' : 'bg-mustard text-forest'}`}>
            {project.status}
          </span>
          <span className="rounded-full bg-forest/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-extrabold text-forest sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-forest/65">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-forest/55">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-moss" aria-hidden="true" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-moss" aria-hidden="true" />
            {project.completedDate}
          </span>
        </div>
        <div className="mt-6 border-t border-forest/10 pt-5">
          <Button variant="outline" size="sm" onClick={() => onSelect(project)} className="w-full sm:w-auto">
            View project
          </Button>
        </div>
      </div>
    </article>
  )
}
