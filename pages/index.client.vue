<script setup lang="ts">
import type { _backgroundPosition, _backgroundSize } from '#tailwind-config/theme';

interface skBadge {
  darkIcon: string
  lightIcon: string
  content: string
}
const skillArray = ref<{ title: string, skills: skBadge[] }[]>([
  {
    title: 'Language', skills: [
      { darkIcon: `i-skill-icons:java-dark`, lightIcon: 'i-skill-icons:java-light', content: 'Java' },
      { darkIcon: 'i-skill-icons:typescript', lightIcon: 'i-skill-icons:typescript', content: 'TypeScript' },
      { darkIcon: 'i-skill-icons:python-dark', lightIcon: 'i-skill-icons:python-light', content: 'Python' },
      { darkIcon: 'i-skill-icons:golang', lightIcon: 'i-skill-icons:golang', content: 'Go' },
      { darkIcon: 'i-skill-icons:rust', lightIcon: 'i-skill-icons:rust', content: 'Rust' },
    ]
  },
  {
    title: 'Framework', skills: [
      { darkIcon: `i-skill-icons:spring-dark`, lightIcon: 'i-skill-icons:spring-light', content: 'Spring Family Bucket' },
      { darkIcon: `i-skill-icons:vuejs-dark`, lightIcon: 'i-skill-icons:vuejs-light', content: 'Vue' },
      { darkIcon: `i-skill-icons:nuxtjs-dark`, lightIcon: 'i-skill-icons:nuxtjs-light', content: 'Nuxt' },
      { darkIcon: `i-skill-icons:react-dark`, lightIcon: 'i-skill-icons:react-light', content: ' React' },
      { darkIcon: `i-skill-icons:nextjs-dark`, lightIcon: 'i-skill-icons:nextjs-light', content: ' Next' },
    ]
  },
  {
    title: 'Middleware', skills: [
      { darkIcon: `i-skill-icons:redis-dark`, lightIcon: 'i-skill-icons:redis-light', content: 'Redis' },
      { darkIcon: `i-skill-icons:rabbitmq-dark`, lightIcon: 'i-skill-icons:rabbitmq-light', content: 'Rabbitmq' },
      { darkIcon: `i-skill-icons:elasticsearch-dark`, lightIcon: 'i-skill-icons:elasticsearch-light', content: 'Elasticsearch' },
      { darkIcon: `i-simple-icons:minio`, lightIcon: 'i-simple-icons:minio', content: 'Minio' },
      { darkIcon: 'i-skill-icons:docker', lightIcon: 'i-skill-icons:docker', content: 'Docker' },
      { darkIcon: 'i-skill-icons:kubernetes', lightIcon: 'i-skill-icons:kubernetes', content: 'Kubernetes' },
    ]
  },
  {
    title: 'Other', skills: [
      { darkIcon: `i-skill-icons:linux-dark`, lightIcon: 'i-skill-icons:linux-light', content: 'Linux' },
      { darkIcon: `i-skill-icons:mysql-dark`, lightIcon: 'i-skill-icons:mysql-light', content: 'MySQL' },
    ]
  }
])
</script>
<template>
  <UContainer class="p-4">
    <UCard class="space-y-4">
      <div class="flex items-center gap-4 mb-4">
        <UAvatar size="3xl" src="/avatar.jpeg" alt="Avatar" class="max-w-full h-auto" :ui="{ background: '' }" />
        <div class="space-y-3">
          <div class="text-3xl">
            Wang Qiang
          </div>
          <div class="text-xs text-slate-400">A full stack engineer</div>
        </div>
      </div>
      <UDivider label="Skill" :ui="{ label: 'text-xl' }" />
      <div class="my-4 space-y-2">
        <div class="flex space-x-2" v-for="(row, key) in skillArray" :key>
          <div class="w-24 text-sm flex items-center">
            <p>{{ row.title }}:</p>
          </div>
          <SkillBadge v-for="(item, key) in row.skills" :key :darkIcon="item.darkIcon" :lightIcon="item.lightIcon"
            :content="item.content" />
        </div>
      </div>
      <UDivider label="Project" :ui="{ label: 'text-xl' }" />
    </UCard>
  </UContainer>
</template>
<!-- <style scoped></style> -->
