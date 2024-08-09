<script setup lang="ts">
import type { Info } from '~/types/types'
const info = await queryContent<Info>('/info').findOne()
</script>
<template>
  <UContainer class="p-4">
    <UCard class="space-y-4">
      <div class="flex items-center gap-4 mb-4">
        <UAvatar size="3xl" src="/avatar.jpeg" alt="Avatar" class="max-w-full h-auto" :ui="{ background: '' }" />
        <div class="space-y-3">
          <div class="text-3xl">
            {{ info.name }}
          </div>
          <div class="text-xs text-slate-400">{{ info.description }}</div>
        </div>
      </div>
      <UDivider label="Skill" :ui="{ label: 'text-xl' }" />
      <div class="my-4 space-y-2">
        <div class="flex space-x-2" v-for="(row, key) in info.skills" :key>
          <div class="w-24 text-sm flex items-center">
            <p>{{ row.name }}:</p>
          </div>
          <SkillBadge v-for="(item, key) in row.content" :key :darkIcon="item.darkIcon" :lightIcon="item.lightIcon"
            :name="item.name" />
        </div>
      </div>
      <UDivider label="Expression" :ui="{ label: 'text-xl' }" />
      <div v-for="(experience, key) in info.experiences" :key class="mt-5">
        <UAlert :ui="{ title: 'text-xl' }">
          <template #title>
            <span>{{ experience.compony }}</span>
          </template>
          <template #description>
            <div class="flex gap-2 mt-2">
              <span>{{ experience.position }}</span>
              <span>{{ `${experience.startTime} - ${experience.endTime}` }}</span>
            </div>
          </template>
        </UAlert>
      </div>
    </UCard>
  </UContainer>
</template>
