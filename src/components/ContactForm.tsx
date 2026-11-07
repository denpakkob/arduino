import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Button from './Button'

interface FormValues {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

type FormErrors = Partial<Record<keyof FormValues, string>>

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.phone.trim() && values.phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.'
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (values.message.trim().length < 20) errors.message = 'Please enter at least 20 characters so we understand your needs.'

  return errors
}

const inputClass =
  'w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-forest placeholder:text-forest/35 outline-none transition focus:border-green focus:ring-4 focus:ring-green/15'

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as keyof FormValues
    const { value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setSubmitted(Object.keys(nextErrors).length === 0)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-forest">Full name <span className="text-purple">*</span></label>
          <input id="contact-name" name="name" value={values.name} onChange={handleChange} className={`${inputClass} ${errors.name ? 'border-purple' : 'border-forest/15'}`} placeholder="Your name" autoComplete="name" />
          {errors.name && <p className="mt-2 text-xs font-semibold text-purple" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-bold text-forest">Email address <span className="text-purple">*</span></label>
          <input id="contact-email" name="email" type="email" value={values.email} onChange={handleChange} className={`${inputClass} ${errors.email ? 'border-purple' : 'border-forest/15'}`} placeholder="you@example.com" autoComplete="email" />
          {errors.email && <p className="mt-2 text-xs font-semibold text-purple" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-bold text-forest">Phone number</label>
          <input id="contact-phone" name="phone" type="tel" value={values.phone} onChange={handleChange} className={`${inputClass} ${errors.phone ? 'border-purple' : 'border-forest/15'}`} placeholder="+60 ..." autoComplete="tel" />
          {errors.phone && <p className="mt-2 text-xs font-semibold text-purple" role="alert">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-bold text-forest">Subject <span className="text-purple">*</span></label>
          <input id="contact-subject" name="subject" value={values.subject} onChange={handleChange} className={`${inputClass} ${errors.subject ? 'border-purple' : 'border-forest/15'}`} placeholder="Project enquiry" />
          {errors.subject && <p className="mt-2 text-xs font-semibold text-purple" role="alert">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-forest">Message <span className="text-purple">*</span></label>
        <textarea id="contact-message" name="message" value={values.message} onChange={handleChange} rows={6} className={`${inputClass} resize-none ${errors.message ? 'border-purple' : 'border-forest/15'}`} placeholder="Tell us about your project, site, and the engineering services you need." />
        {errors.message && <p className="mt-2 text-xs font-semibold text-purple" role="alert">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send enquiry
        </Button>
        <p className="max-w-sm text-xs leading-5 text-forest/55">
          This demo form validates your details locally. Connect an email service or backend before production use.
        </p>
      </div>

      {submitted && (
        <div className="flex items-start gap-3 rounded-2xl bg-lime/60 p-4 text-sm leading-6 text-forest" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-moss" aria-hidden="true" />
          <p>Your enquiry details are valid and ready. No message has been sent because a backend or form service has not been configured yet.</p>
        </div>
      )}
    </form>
  )
}
