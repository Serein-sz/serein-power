<script setup lang="ts">
import type { RecordBodyData } from '#build/components';
import type { Command } from '#ui/types'

const isOpen = ref(false)

const recordBodyDataRef = ref<InstanceType<typeof RecordBodyData> | null>(null)

const actions: Command[] = [
  { id: 'record weight', label: 'Record weight', icon: 'i-heroicons-document-plus', click: openRecordBodyDataRef },
]

function onSelect(option: any) {
  option.click()
  isOpen.value = false
}

function openRecordBodyDataRef() {
  if (recordBodyDataRef.value) {
    recordBodyDataRef.value.open()
  }
}


defineShortcuts({
  meta_k: {
    handler: () => isOpen.value = true
  }
})
</script>
<template>
  <UModal v-model="isOpen" :ui="{ width: 'w-full sm:max-w-[800px]' }">
    <div class="p-4">
      <UCommandPalette :autoselect="false" :groups="[{ key: 'actions', commands: actions }]"
        @update:model-value="onSelect" />
    </div>
  </UModal>
  <RecordBodyData ref="recordBodyDataRef" />
</template>
