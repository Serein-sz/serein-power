<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>
<template>
  <div class="flex items-center align-center text-center w-full flex-row">
    <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid" />
    <div class="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap">
      <span class="text-xl">{{ props.label }}</span>
    </div>
    <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid translate-y-[50%]" />
  </div>
</template>
