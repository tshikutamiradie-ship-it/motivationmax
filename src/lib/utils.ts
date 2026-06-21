import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import slugify from 'slugify'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const toSlug = (str: string) =>
  slugify(str, { lower: true, strict: true, locale: 'fr' })

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export const ytThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`