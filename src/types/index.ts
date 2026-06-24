export type SkillLevel = 'expert' | 'practiced' | 'learning'

export interface SkillItem {
  name: string
  level: SkillLevel
}

export interface SkillGroup {
  id: number
  title: string
  description: string
  skills: SkillItem[]
}

export interface SkillSummary {
  icon: string
  title: string
  description: string
}

export type ProjectCategory = 'ai' | 'enterprise' | 'learning' | 'personal'

export interface ProjectMeta {
  type: string
  time: string
  role: string
  github?: string
  preview?: string
}

export interface ProjectChallenge {
  title: string
  solution: string
}

export interface Project {
  id: string
  index: number
  title: string
  category: ProjectCategory
  categoryLabel: string
  description: string
  techStack: string[]
  highlights: string[]
  result: string
  meta: ProjectMeta
  background?: string
  responsibilities?: string[]
  coreFeatures?: Array<{ icon: string; title: string; description: string }>
  challenges?: ProjectChallenge[]
  pitfalls?: string[]
  interviewPoints?: string[]
  review?: string
  reviewTags?: string[]
}

export interface Article {
  id: string
  title: string
  date: string
  tags: string[]
  summary: string
  readTime: string
}
