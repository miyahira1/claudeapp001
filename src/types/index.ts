export interface Tutorial {
  id: string
  title: string
  category: string
  views: string
  duration: string
  thumbnailColor: string
}

export interface AITool {
  id: string
  name: string
  category: string
  description: string
  rating: number
  logoColor: string
  featured?: boolean
}

export interface Resource {
  id: string
  title: string
  description: string
  category: string
  fileType: 'PDF' | 'Notion' | 'Excel'
  downloads: string
  coverColor: string
}

export interface Product {
  id: string
  name: string
  price: string
  period?: string
  features: string[]
  cta: string
  popular?: boolean
  tier: 'basic' | 'pro' | 'enterprise'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatarColor: string
}

export interface Workflow {
  id: string
  name: string
  description: string
  tools: string[]
  icon: string
}
