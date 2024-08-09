import type { ParsedContent } from '@nuxt/content'

export interface Info extends ParsedContent {
  name: string,
  description: string,
  skills: Skill[]
  experiences: Experience[]
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

interface Experience {
  compony: string
  startTime: string
  endTime: string
  position: string
  projects: Project[]
}

interface Project {
  name: string
  description: string
  job: string
}
