<script setup lang="ts">
const props = defineProps<{
  darkIcon: string
  lightIcon: string
  content: string
}>()
</script>
<template>
  <UBadge color="white" variant="solid">
    <UIcon v-if="$colorMode.value === 'dark'" :name="props.darkIcon" class="w-5 h-5" />
    <UIcon v-if="$colorMode.value === 'light'" :name="props.lightIcon" class="w-5 h-5" />
    <span class="ml-2">
      {{ props.content }}
    </span>
  </UBadge>
</template>
