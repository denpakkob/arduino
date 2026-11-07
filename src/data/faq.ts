export interface FaqCategory {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}

export const faqCategories: FaqCategory[] = [
  {
    title: 'Engineering Services',
    questions: [
      {
        question: 'Which engineering disciplines do you cover?',
        answer:
          'We provide mechanical, electrical, and civil engineering services, along with structural design, project management, site supervision, and maintenance and retrofitting support.',
      },
      {
        question: 'Do you work with contractors and developers?',
        answer:
          'Yes. We regularly work with contractors, developers, facility owners, architects, government agencies, and industrial clients who need coordinated engineering input.',
      },
      {
        question: 'Can services be customized for our project?',
        answer:
          'Yes. Every engagement is shaped around your scope, site conditions, budget, and timeline. We can provide standalone services or a fully integrated multi-discipline package.',
      },
    ],
  },
  {
    title: 'Projects & Process',
    questions: [
      {
        question: 'What does a typical engineering engagement look like?',
        answer:
          'Most projects begin with a site visit or briefing, followed by concept design, detailed calculations and drawings, regulatory submissions where needed, and construction-stage support.',
      },
      {
        question: 'Do you provide site supervision during construction?',
        answer:
          'Yes. We offer site inspections, progress reporting, quality checks, and contractor coordination to ensure the design is built correctly and safely.',
      },
      {
        question: 'How long does a project usually take?',
        answer:
          'Timelines vary by scope. A focused design package may take a few weeks, while multi-discipline projects with approvals and supervision can run over several months.',
      },
    ],
  },
  {
    title: 'Pricing & Booking',
    questions: [
      {
        question: 'How are engineering services priced?',
        answer:
          'Pricing depends on the discipline, project complexity, deliverables, and level of site support required. We provide a clear quotation after an initial consultation so you can decide with confidence.',
      },
      {
        question: 'Do you offer staged or package pricing?',
        answer:
          'Yes. Multi-discipline projects can be quoted as an integrated package, and supervision or phased works can often be arranged in stages to suit your budget.',
      },
      {
        question: 'How do we request a quote or site visit?',
        answer:
          'Use the contact form, email, phone, or WhatsApp button to share your project details. We will respond to confirm scope, schedule a site visit if needed, and prepare a quotation.',
      },
    ],
  },
  {
    title: 'General Enquiries',
    questions: [
      {
        question: 'Where is AMDARPreneur located?',
        answer:
          'We are an engineering practice based in Kelantan, Malaysia, serving clients across the region and available for projects elsewhere where logistics allow.',
      },
      {
        question: 'Do you work with clients outside Kelantan?',
        answer:
          'Yes. Many services can be delivered remotely, and we can coordinate site visits for projects across Peninsular Malaysia and beyond.',
      },
      {
        question: 'Are your designs compliant with Malaysian standards?',
        answer:
          'We prepare designs in accordance with applicable Malaysian standards and by-laws, and support submissions to local authorities where required.',
      },
    ],
  },
]
