<script setup lang="ts">

const isOpen = ref(false)
const weight = ref<number | null>(null)
function open() {
  isOpen.value = true
}
defineExpose({
  open
})

</script>
<template>
  <UModal v-model="isOpen">
    <UCard>
      <UInput v-model="weight" type="number" leadingIcon="i-heroicons-pencil"></UInput>
    </UCard>
  </UModal>
</template>
