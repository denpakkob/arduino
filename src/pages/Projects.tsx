import { useMemo, useState } from 'react'
import { FolderKanban } from 'lucide-react'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { projectCategories, projects, type Project } from '../data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory],
  )

  return (
    <>
      <SEO
        title="Projects | AMDARPreneur Engineering"
        description="Explore AMDARPreneur engineering projects across mechanical, electrical, civil, and multi-discipline work for buildings, infrastructure, and industry."
      />
      <PageHeader
        eyebrow="Our Work"
        title="Projects engineered for safe, durable outcomes."
        description="Browse selected projects that demonstrate how mechanical, electrical, and civil engineering come together across buildings, infrastructure, and industry."
        backTo="/"
        backLabel="Back to home"
      />

      <section className="section-padding">
        <div className="container-x">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    activeCategory === category
                      ? 'bg-moss text-white shadow-soft'
                      : 'border border-forest/15 bg-white text-forest/65 hover:border-moss/40 hover:text-moss'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="text-sm font-semibold text-forest/55">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={Math.min(index, 5) * 60}>
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-[2rem] border border-dashed border-forest/20 bg-lime/30 p-12 text-center">
              <FolderKanban className="mx-auto h-10 w-10 text-moss" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-bold text-forest">No projects in this category yet</h2>
              <p className="mt-2 text-sm text-forest/60">Please check another category or contact us to discuss a similar engagement.</p>
            </div>
          )}

          <div className="mt-16 rounded-[2rem] bg-forest p-8 text-center text-white shadow-soft sm:p-12">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-lime/70 sm:text-base">
              Tell us about your project and we will help you define the right engineering scope.
            </p>
            <Button to="/#contact" variant="light" size="lg" className="mt-7">Start a project enquiry</Button>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
