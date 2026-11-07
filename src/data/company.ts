import { BadgeCheck, Compass, HeartHandshake, Lightbulb, RefreshCcw, Target, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ValueItem {
  icon: LucideIcon
  title: string
  description: string
}

export const companyProfile = {
  introduction:
    'AMDARPreneur is an engineering practice delivering mechanical, electrical, and civil engineering services for buildings, infrastructure, and industrial projects.',
  background:
    'The firm was founded on the belief that good engineering is practical, safe, and built to last. Our work brings together rigorous design, code compliance, clear documentation, and site-level supervision so projects are delivered as intended.',
  vision: 'A built environment and industrial base delivered by engineering that is safe, efficient, and responsible.',
  mission:
    'To deliver dependable mechanical, electrical, and civil engineering solutions that are safe, buildable, and tailored to each client and site.',
}

export const companyValues: ValueItem[] = [
  { icon: Compass, title: 'Integrity', description: 'We give honest, engineering-led advice grounded in real site and code realities.' },
  { icon: Target, title: 'Excellence', description: 'We pursue high standards in analysis, documentation, delivery, and site follow-through.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We look for practical ways to improve designs, systems, and project outcomes.' },
  { icon: Users, title: 'Collaboration', description: 'We work closely with clients, contractors, architects, and consultants as one team.' },
  { icon: RefreshCcw, title: 'Sustainability', description: 'We prioritize durable, efficient, and responsible engineering over short-term fixes.' },
  { icon: HeartHandshake, title: 'Empowerment', description: 'We document and explain our work so clients and teams can maintain assets confidently.' },
]

export const companyStrengths = [
  'Multi-discipline coverage across mechanical, electrical, and civil engineering',
  'Code-compliant design with clear, buildable documentation',
  'Independent site supervision and quality assurance',
  'Client-centered and context-aware recommendations',
  'Flexible online and on-site delivery options',
  'Clear deliverables, timelines, and measurable outcomes',
]

export const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: 'Multi-discipline capability',
    description: 'One team covering mechanical, electrical, and civil engineering reduces coordination gaps and clashes on site.',
  },
  {
    icon: Target,
    title: 'Outcome-focused design',
    description: 'Every drawing and calculation is designed to be safe, buildable, and aligned with your project goals.',
  },
  {
    icon: Users,
    title: 'Site-aware approach',
    description: 'We ground our designs in real site conditions and supervise construction so intent becomes reality.',
  },
  {
    icon: Lightbulb,
    title: 'Practical innovation',
    description: 'We blend proven engineering fundamentals with modern, efficient, and locally relevant solutions.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted partnership',
    description: 'We build long-term relationships through transparency, accountability, and clear communication.',
  },
]
