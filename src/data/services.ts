import {
  Building2,
  ClipboardCheck,
  Cog,
  DraftingCompass,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  summary: string
  description: string
  benefits: string[]
  accent: 'green' | 'indigo' | 'purple' | 'mustard'
}

export const services: Service[] = [
  {
    slug: 'mechanical-engineering',
    icon: Cog,
    title: 'Mechanical Engineering',
    summary: 'Design, analysis, and support for mechanical systems, equipment, and industrial facilities.',
    description:
      'Our mechanical engineering team supports equipment selection, system design, piping and ducting layouts, HVAC planning, fabrication reviews, and troubleshooting across industrial and building projects.',
    benefits: ['Fit-for-purpose system design', 'Equipment and material selection', 'Fabrication and installation review'],
    accent: 'green',
  },
  {
    slug: 'electrical-engineering',
    icon: Zap,
    title: 'Electrical Engineering',
    summary: 'Safe, efficient electrical design from power distribution to renewable energy systems.',
    description:
      'We deliver electrical design, load calculations, distribution planning, lighting layouts, earthing and protection studies, and renewable energy integration for residential, commercial, and industrial clients.',
    benefits: ['Code-compliant electrical designs', 'Load and energy efficiency analysis', 'Renewable energy integration'],
    accent: 'indigo',
  },
  {
    slug: 'civil-engineering',
    icon: Building2,
    title: 'Civil Engineering',
    summary: 'Structures, infrastructure, and site development designed for safety and longevity.',
    description:
      'Our civil engineering services cover structural design, foundation engineering, drainage and water management, roads and pavements, and site development from concept through to construction support.',
    benefits: ['Sound structural and geotechnical design', 'Efficient drainage and water solutions', 'Construction-stage engineering support'],
    accent: 'purple',
  },
  {
    slug: 'structural-design-analysis',
    icon: DraftingCompass,
    title: 'Structural Design & Analysis',
    summary: 'Detailed structural design, calculation, and review for buildings and infrastructure.',
    description:
      'We produce structural drawings, connection details, and calculation reports for concrete, steel, timber, and masonry structures — verified against applicable codes and client requirements.',
    benefits: ['Code-compliant structural drawings', 'Detailed calculation reports', 'Peer review of third-party designs'],
    accent: 'mustard',
  },
  {
    slug: 'project-management-site-supervision',
    icon: ClipboardCheck,
    title: 'Project Management & Site Supervision',
    summary: 'Keep projects on schedule, on budget, and compliant from site setup to handover.',
    description:
      'We provide project planning, contractor coordination, site inspections, progress reporting, and quality assurance so engineering designs are built as intended.',
    benefits: ['Clear project controls and reporting', 'Independent site supervision', 'Quality and compliance assurance'],
    accent: 'green',
  },
  {
    slug: 'maintenance-retrofitting',
    icon: Wrench,
    title: 'Maintenance & Retrofitting',
    summary: 'Extend asset life and improve performance through inspection, repair, and upgrade works.',
    description:
      'We assess existing buildings, plants, and infrastructure — then plan and supervise repairs, system upgrades, energy retrofits, and capacity improvements with minimal disruption.',
    benefits: ['Condition assessment and reporting', 'Prioritized repair and upgrade plans', 'Supervision of retrofit works'],
    accent: 'indigo',
  },
]
