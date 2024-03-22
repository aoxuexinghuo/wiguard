<script setup lang="ts">
import { onMounted } from 'vue'
import { Chart } from '@antv/g2'

const data = [0.12, 0.11, 0.09, 0.15, 0.56, 0.68, 0.47, 0.32];

onMounted(() => {
  const chart = new Chart({
    container: 'container',
    width: document.body.clientWidth,
    height: 200,
  })

  chart.line().encode({
    x: 'x',
    y: 'y',
  }).data(data.map((y, x) => ({ x, y })))

  chart.render()
})
</script>

<template>
  <div class="subtitle">Raw data</div>
  <div id="container"></div>
  <van-cell title="当前状态：跌倒"/>
</template>

<style scoped></style>