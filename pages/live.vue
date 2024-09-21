<script setup lang="ts">
import { onUnmounted, reactive, ref } from 'vue'

import VCharts from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LegendComponent, TooltipComponent, GridComponent, VisualMapComponent, } from 'echarts/components'
import { HeatmapChart } from 'echarts/charts'

use([HeatmapChart, CanvasRenderer, LegendComponent, TooltipComponent, GridComponent, VisualMapComponent])


const subcarrier = Array.from({ length: 30 }, (_, i) => i)
const time = Array.from({ length: 301 }, (_, i) => {
  return (i - 300) / 10 + 's'
})

const data: any = []

const option = reactive({
  grid: {
    top: 20,
    left: 30,
    right: 30,
    bottom: 20
  },
  xAxis: {
    type: 'category',
    data: time,
    axisLabel: {
      interval: 49
    },
    axisPointer: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: subcarrier,
    axisPointer: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 35,
    right: 5,
    top: 'middle',
    itemWidth: 10,
    inRange: {
      colorHue: [240, 0]
    }
  },
  series: {
    type: 'heatmap',
    data: [],
  }
})

const random = () => {
  const newdata = []
  for (let i = 0; i < 300; i++) {
    for (let j = 0; j < 30; j++) {
      newdata.push({
        timestamp: Date.now() - (30 + i) * 100,
        subcarrier: j,
        csi: Math.random() * 35
      })
    }
  }
}
</script>

<template>
  <VCharts class="chart" :option="option" autoresize />
  <button @click="random">random csi</button>
  <button>collect</button>
</template>

<style scoped>
.chart {
  width: 100vw;
  height: 200px;
}
</style>