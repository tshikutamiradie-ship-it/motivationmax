export type Role = 'admin' | 'member' | 'subscriber'

export interface Profile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  role: Role
  created_at: string
}

export interface Category {
  id: number
  name: string
  slug: string
  color: string
}

export interface Post {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  cover_url?: string
  author_id?: string
  category_id?: number
  category?: Category
  tags: string[]
  status: 'draft' | 'published' | 'archived'
  featured: boolean
  read_time: number
  views: number
  seo_title?: string
  seo_desc?: string
  og_image?: string
  published_at?: string
  created_at: string
  updated_at: string
}

export interface Media {
  id: string
  title: string
  type: 'video' | 'short' | 'podcast' | 'image'
  url?: string
  youtube_id?: string
  thumbnail_url?: string
  duration?: string
  category_id?: number
  category?: Category
  description?: string
  tags: string[]
  views: number
  status: 'draft' | 'published'
  published_at: string
}

export interface Quote {
  id: string
  text: string
  author: string
  category_id?: number
  category?: Category
  bg_color: string
  shares: number
  featured: boolean
}

export interface Ebook {
  id: string
  title: string
  description?: string
  cover_url?: string
  file_pdf_url?: string
  file_epub_url?: string
  category_id?: number
  category?: Category
  tags: string[]
  is_free: boolean
  price: number
  stripe_price_id?: string
  downloads: number
  status: 'draft' | 'published'
}

export interface Subscriber {
  id: string
  email: string
  prenom?: string
  status: 'active' | 'unsubscribed' | 'bounced'
  source: string
  created_at: string
}

export interface Order {
  id: string
  user_id?: string
  ebook_id?: string
  ebook?: Ebook
  amount: number
  currency: string
  status: 'pending' | 'paid' | 'refunded' | 'failed'
  created_at: string
}