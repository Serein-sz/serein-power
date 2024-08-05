<script setup lang="ts">
import type { UInput } from '#build/components'
import type { BodyRecord } from '@prisma/client'

const isOpen = ref(false)
const bodyData = reactive<BodyRecord>({} as BodyRecord)
function open() {
  isOpen.value = true
}

defineExpose({
  open
})

onMounted(async () => {
  const [data] = await $fetch<BodyRecord[]>('/api/record/recent')
  bodyData.weight = data.weight
})

const refreshMark = useRefresh(recordRefreshKey)
async function submit() {
  await $fetch<BodyRecord>('/api/record', { method: 'post', body: bodyData })
  refreshMark.value ^= 1
  isOpen.value = false
}

</script>
<template>
  <UModal v-model="isOpen">
    <UCard>
      <UForm :state="bodyData" class="space-y-4" @submit="submit">
        <UFormGroup label="Weight" name="weight">
          <UInput v-model="bodyData.weight" type="number" leadingIcon="i-heroicons-pencil"></UInput>
        </UFormGroup>
        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </UCard>
  </UModal>
</template>
