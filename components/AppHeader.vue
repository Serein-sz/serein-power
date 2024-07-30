<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    //@ts-ignore
    links[2][0].icon = isDark.value ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
  }
})

const toggle = useToggle(isDark)

const links = reactive([[], [{
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
  <UHorizontalNavigation :links class="border-b border-slate-700"></UHorizontalNavigation>
</template>
<style scoped></style>
