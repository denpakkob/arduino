import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineDark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  target?: string
  rel?: string
}

const variants = {
  primary: 'bg-green text-white shadow-soft hover:bg-moss focus-visible:ring-green',
  secondary: 'bg-purple text-white shadow-soft hover:bg-indigo focus-visible:ring-purple',
  outline: 'border border-moss/30 bg-white text-moss hover:border-moss hover:bg-lime/60 focus-visible:ring-moss',
  outlineDark: 'border border-white/25 bg-white/5 text-white hover:border-lime hover:bg-white/10 focus-visible:ring-lime',
  light: 'bg-lime text-forest hover:bg-white focus-visible:ring-lime',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm sm:text-base',
  lg: 'px-7 py-4 text-base sm:text-lg',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  target,
  rel,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {children}
      {(to || href) && variant !== 'outline' && variant !== 'outlineDark' && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} target={target} rel={rel}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  )
}
