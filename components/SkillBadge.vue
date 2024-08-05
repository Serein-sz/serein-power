<script setup lang="ts">
const props = defineProps<{
  icon: string
  content: string
}>()
const colorMode = useColorMode()
let icon = ref(props.icon)
watch(colorMode, () => {
  if (colorMode.value !== 'system') {
    icon.value = props.icon.replace('dark', colorMode.value)
  }
})
</script>
<template>
  <UBadge color="white" variant="solid">
    <UIcon :name="icon" class="w-5 h-5" />
    <span class="ml-2">
      {{ props.content }}
    </span>
  </UBadge>
</template>
