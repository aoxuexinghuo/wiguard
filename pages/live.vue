<script setup lang="ts">
import mqtt from 'mqtt';
import { ref } from 'vue';
import Papa from 'papaparse';

const runtimeConfig = useRuntimeConfig()
const csiAmplQueue = ref<number[][]>([])
const maxQueueLength = 100

onMounted(() => {
  const client = mqtt.connect(runtimeConfig.public.mqttBrokerUri)
  client.on('connect', () => {
    console.log(`Connected to ${runtimeConfig.public.mqttBrokerUri}`);
    client.subscribe('wiguard/csi')
  })

  client.on('message', (topic, message) => {
    const { data } = Papa.parse(message.toString(), {
      dynamicTyping: true,
      skipEmptyLines: true
    })

    data.forEach((row: any) => {
      const csi: number[] = JSON.parse(row[24])
      const csiAmpl: number[] = []
      for (let i = 0; i < csi.length; i += 2) {
        csiAmpl.push(Math.sqrt(csi[i] ** 2 + csi[i + 1] ** 2))
      }
      csiAmplQueue.value.push(csiAmpl)
      while (csiAmplQueue.value.length > maxQueueLength) {
        csiAmplQueue.value.shift()
      }
    })
  })

  setInterval(() => {
    csidata.value = csiAmplQueue.value.flatMap((csiAmpl, i) => {
      return csiAmpl.map((ampl, j) => {
        return [i, j, ampl]
      })
    })
  }, 100)
})

const subcarrier = Array.from({ length: 64 }, (_, i) => i)
const time = Array.from({ length: maxQueueLength }, (_, i) => {
  return i
})

const csidata = ref<number[][]>([])


const option = computed<ECOption>(() => {
  return {
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
      data: csidata.value,
      progressive: 0
    }
  }
})
</script>

<template>
  <VChart class="chart" :option="option" autoresize />
  <button>collect</button>
</template>

<style scoped>
.chart {
  width: 100vw;
  height: 200px;
}
</style>