<script setup lang="ts">
import type { BodyRecord } from '@prisma/client'
import * as echarts from 'echarts'
const chartRef = ref<HTMLDivElement | null>(null)
const chartInstance = ref<echarts.ECharts | null>(null)
const bodyRecords = ref<BodyRecord[]>([])
const colorMode = useColorMode()
onMounted(async () => {
  await fetchData()
  initChart()
})

const option = computed(() => ({
  darkMode: colorMode.value === 'dark',
  title: {
    text: '体重记录',
    left: 'center',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: bodyRecords.value.map(item => new Date(item.created_at).toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-')),
    max: function (value: any) {
      const maxDate = value.max
      return maxDate + 1
    },
  },
  yAxis: {
    type: 'value',
    max: function (value: any) {
      return Math.ceil(value.max + (value.max - value.min) / 2)
    },
    min: function (value: any) {
      return Math.floor(value.min - (value.max - value.min) / 2)
    }
  },
  series: [
    {
      data: bodyRecords.value.map(item => item.weight),
      type: 'line',
      areaStyle: {},
      smooth: true,
      color: '#00C16A',
      markLine: {
        data: [{
          yAxis: bodyRecords.value.slice(Math.max(bodyRecords.value.length - 7, 0)).reduce((a, b) => a + b.weight, 0) / Math.min(bodyRecords.value.length, 7),
          label: {
            formatter: '平均体重: {c}',
            position: 'end'
          }
        }, {
          yAxis: 64.4,
          label: {
            formatter: '目标体重: {c}',
            position: 'end'
          }
        }]
      }
    }
  ]
}))

watch(option, () => {
  initChart()
})

function initChart() {
  if (!chartInstance.value)
    chartInstance.value = echarts.init(chartRef.value)
  chartInstance.value.setOption(option.value)
}


async function fetchData() {
  bodyRecords.value = await $fetch<BodyRecord[]>('/api/record', { method: 'get' })
}

</script>
<template>
  <div class="p-5">
    <UCard>
      <div ref="chartRef" class="h-[calc(100vh-9rem)]"></div>
    </UCard>
  </div>
</template>
<style scoped></style>
