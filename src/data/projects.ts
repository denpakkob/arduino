import projectOne from '../assets/images/project-1.svg'
import projectTwo from '../assets/images/project-2.svg'
import projectThree from '../assets/images/project-3.svg'
import projectFour from '../assets/images/project-4.svg'
import projectFive from '../assets/images/project-5.svg'
import projectSix from '../assets/images/project-6.svg'

export type ProjectStatus = 'Completed' | 'Ongoing'

export interface Project {
  slug: string
  title: string
  image: string
  category: string
  location: string
  completedDate: string
  status: ProjectStatus
  summary: string
  description: string
  outcomes: string[]
}

export const projectCategories = [
  'All',
  'Mechanical',
  'Electrical',
  'Civil',
  'Multi-Discipline',
] as const

export const projects: Project[] = [
  {
    slug: 'food-processing-plant-retrofit',
    title: 'Food Processing Plant Retrofit',
    image: projectOne,
    category: 'Mechanical',
    location: 'Kelantan',
    completedDate: 'March 2025',
    status: 'Completed',
    summary: 'Mechanical overhaul of process lines, HVAC, and utilities for an expanding food processor.',
    description:
      'We assessed the existing plant layout and designed upgraded process piping, ventilation, and material-handling systems that increased throughput while meeting hygiene and safety standards.',
    outcomes: [
      'Redesigned process and utility piping layouts',
      'Improved ventilation and temperature control',
      'Supervised installation with zero safety incidents',
    ],
  },
  {
    slug: 'solar-commercial-complex',
    title: 'Solar PV & Backup Power System',
    image: projectTwo,
    category: 'Electrical',
    location: 'Tumpat',
    completedDate: 'August 2025',
    status: 'Completed',
    summary: 'Grid-tied solar installation with backup generation for a commercial complex.',
    description:
      'The project covered load assessment, PV array sizing, inverter and protection design, earthing, and switchgear upgrades — reducing grid dependence and improving power resilience.',
    outcomes: [
      '45 kWp rooftop solar array with net metering',
      'Automatic backup generator integration',
      'Projected 30% reduction in monthly energy costs',
    ],
  },
  {
    slug: 'rural-access-road-drainage',
    title: 'Rural Access Road & Drainage',
    image: projectThree,
    category: 'Civil',
    location: 'Kelantan',
    completedDate: 'Expected 2026',
    status: 'Ongoing',
    summary: 'Civil works for a 2.4 km rural access road with drainage and erosion control.',
    description:
      'We are providing survey support, earthworks design, culvert and drainage layout, pavement design, and site supervision for a road serving agricultural and residential areas.',
    outcomes: [
      'Alignment and earthworks design complete',
      'Drainage and culvert layout approved by authorities',
      'Site supervision and quality control ongoing',
    ],
  },
  {
    slug: 'two-storey-commercial-building',
    title: 'Two-Storey Commercial Building',
    image: projectFour,
    category: 'Multi-Discipline',
    location: 'Kota Bharu',
    completedDate: 'November 2024',
    status: 'Completed',
    summary: 'Full engineering package — civil, structural, mechanical, and electrical — for a retail building.',
    description:
      'Our team delivered coordinated designs for the building structure, foundations, M&E services, and site infrastructure, giving the contractor a single, buildable package.',
    outcomes: [
      'Complete architectural-structural-M&E drawing set',
      'Foundation and structural design approved',
      'Integrated M&E coordination reduced clashes on site',
    ],
  },
  {
    slug: 'manufacturing-automation-upgrade',
    title: 'Manufacturing Automation Upgrade',
    image: projectFive,
    category: 'Mechanical',
    location: 'Machang',
    completedDate: 'June 2025',
    status: 'Completed',
    summary: 'Mechatronics and control-system upgrade for a furniture manufacturing plant.',
    description:
      'We designed conveyor, dust-extraction, and compressed-air systems alongside electrical controls, improving output while reducing energy use and workshop hazards.',
    outcomes: [
      'Automated material handling layout',
      'Energy-efficient motor and drive specification',
      '25% throughput improvement post-installation',
    ],
  },
  {
    slug: 'water-irrigation-pumping-station',
    title: 'Water & Irrigation Pumping Station',
    image: projectSix,
    category: 'Multi-Discipline',
    location: 'Jeli',
    completedDate: 'Expected 2026',
    status: 'Ongoing',
    summary: 'Design of a solar-powered pumping station and distribution network for farmland irrigation.',
    description:
      'This project integrates civil works for the pump house and pipeline route, mechanical pump and valve selection, and electrical design for solar arrays and control panels.',
    outcomes: [
      'Pump selection and hydraulic design complete',
      'Solar power and control system sized',
      'Pipeline route and civil works under review',
    ],
  },
]
