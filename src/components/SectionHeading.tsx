interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${dark ? 'text-leaf' : 'text-moss'}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-forest'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? 'text-lime/75' : 'text-forest/65'}`}>{description}</p>
      )}
    </div>
  )
}
