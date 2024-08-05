<script setup lang="ts">

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    links[2][0].icon = isDark.value ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
  }
})
const toggle = useToggle(isDark)
const links = reactive([[], [{
  label: 'Profile',
  icon: 'i-mdi:face-man-profile',
  to: '/'
}, {
  icon: 'i-heroicons:presentation-chart-line',
  label: 'Record',
  to: '/record'
}], [{
  icon: 'i-heroicons-sun-20-solid',
  iconClass: 'dark:bg-gray-100 bg-gray-800',
  click: toggle
}]])



</script>
<template>
  <div class="min-w-screen">
    <UHorizontalNavigation :links class="border-b border-slate-700"></UHorizontalNavigation>
    <CommandAction />
  </div>
</template>
<style scoped></style>
