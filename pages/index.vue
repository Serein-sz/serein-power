<script setup lang="ts">
interface skBadge {
  icon: string
  content: string
}
const skillArray: { title: string, skills: skBadge[] }[] = [
  {
    title: 'Language', skills: [
      { icon: `i-skill-icons:java-dark`, content: 'Java' },
      { icon: 'i-skill-icons:typescript', content: 'TypeScript' },
      { icon: 'i-skill-icons:golang', content: 'Go' },
      { icon: 'i-skill-icons:rust', content: 'Rust' },
    ]
  },
  {
    title: 'Framework', skills: [
      { icon: `i-skill-icons:spring-dark`, content: 'Spring Family Bucket' },
      { icon: `i-skill-icons:vuejs-dark`, content: 'Vue' },
      { icon: `i-skill-icons:nuxtjs-dark`, content: 'Nuxt' },
      { icon: `i-skill-icons:react-dark`, content: ' React' },
      { icon: `i-skill-icons:nextjs-dark`, content: ' NextJs' },
    ]
  },
  { title: 'Middleware', skills: [
    { icon: `i-skill-icons:mysql-dark`, content: 'MySQL' },
    { icon: `i-skill-icons:redis-dark`, content: 'Redis' },
    { icon: `i-skill-icons:rabbitmq-dark`, content: 'Rabbitmq' },
    { icon: 'i-skill-icons:docker', content: 'Docker' },
    { icon: 'i-skill-icons:kubernetes', content: 'Kubernetes' },
  ] }
]
</script>
<template>
  <UContainer class="p-4">
    <UCard class="space-y-4">
      <div class="flex items-center gap-4 mb-4">
        <UAvatar size="3xl" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
        <div class="space-y-3">
          <div class="text-2xl">
            Name
          </div>
          <div class="text-xs text-slate-400">A full stack engineer</div>
        </div>
      </div>
      <UDivider />
      <div class="my-4 space-y-2">
        <div class="flex space-x-2" v-for="(row, key) in skillArray" :key>
          <div class="w-24 text-sm flex items-center">
            <p>{{ row.title }}:</p>
          </div>
          <SkillBadge v-for="(item, key) in row.skills" :key :icon="item.icon" :content="item.content" />
        </div>
      </div>
      <UDivider />
    </UCard>
  </UContainer>
</template>
<style scoped></style>
