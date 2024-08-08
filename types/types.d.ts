import type { ParsedContent } from '@nuxt/content'

export interface Info extends ParsedContent {
  name: string,
  description: string,
  skills: Skill[]
}

export interface Skill {
  name: string,
  content: SkBadge[]
}

export interface SkBadge {
  darkIcon: string
  lightIcon: string
  name: string
}
