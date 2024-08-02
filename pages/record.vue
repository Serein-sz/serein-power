<script setup lang="ts">
import type { BodyRecord } from '@prisma/client'
import * as echarts from 'echarts'
const chart = ref<HTMLDivElement | null>(null)
const bodyRecords = ref<BodyRecord[]>([])
onMounted(async () => {
  await fetchData()
  initChart()
})
function initChart() {
  const myChart = echarts.init(chart.value)
  myChart.setOption({
    darkMode: true,
    title: {
      text: '体重记录',
      left: 'center',
      textStyle: {
        color: '#CCCCCC'
      }
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
  })
}

async function fetchData() {
  bodyRecords.value = await $fetch<BodyRecord[]>('/api/record', { method: 'get' })
}

</script>
<template>
  <UCard class="m-5">
    <div ref="chart" class="m-2 h-96"></div>
  </UCard>
</template>
<style scoped></style>
