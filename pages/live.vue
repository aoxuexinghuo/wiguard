<script setup>
import { ref, computed } from 'vue';
import mqtt from 'mqtt';

const runtimeConfig = useRuntimeConfig();
const mqttClient = ref(null);
const dataBuffer = ref(Array(100).fill(-30)); // 初始数据

const mqttConfig = {
  broker: runtimeConfig.public.mqttBrokerUri,
  topic: 'wigguard/rssi',
  clientId: `rssi-${Date.now()}`
};

// ✅ 计算 MQTT 连接状态
const isMqttConnected = computed(() => mqttClient.value?.connected ?? false);

// ✅ 连接 MQTT
async function connectMqtt() {
  if (mqttClient.value) return;

  try {
    mqttClient.value = mqtt.connect(mqttConfig.broker, {
      clientId: mqttConfig.clientId,
      cleanSession: true
    });

    mqttClient.value.on('connect', () => {
      console.log('✅ MQTT 连接成功');
      mqttClient.value.subscribe(mqttConfig.topic);
    });

    mqttClient.value.on('message', (topic, message) => {
      if (topic !== mqttConfig.topic) return;
      try {
        const rssi = parseFloat(message.toString().trim());
        if (!isNaN(rssi)) updateData(rssi);
      } catch (err) {
        console.error('📡 数据解析失败:', err);
      }
    });

    mqttClient.value.on('error', (err) => {
      console.error('❌ MQTT 连接错误:', err);
      setTimeout(connectMqtt, 2000);
    });

  } catch (err) {
    console.error('⚠️ 连接初始化失败:', err);
    setTimeout(connectMqtt, 2000);
  }
}

// ✅ 更新数据
function updateData(newValue) {
  dataBuffer.value.push(newValue);
  if (dataBuffer.value.length > 100) dataBuffer.value.shift();
}

// ✅ ECharts 配置
const chartOptions = computed(() => ({
  title: {
    text: '实时 RSSI 监控',      // 图表标题
    left: 'center',            // 标题居中
    textStyle: { fontSize: 18, color: '#2c3e50' } // 标题样式
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    data: dataBuffer.value.map((_, i) => i),
  },
  yAxis: {
    type: 'value',
    min: -100,
    max: 0,
    name: 'RSSI 值',
    nameLocation: 'middle',
    nameRotate: 90, // 旋转角度，Y轴一般设置90度
    nameGap: 30, // 调整与轴的距离，增大值让它左移
    nameTextStyle: { fontSize: 14, color: '#2c3e50' } // Y轴标题样式
  },
  series: [{ type: 'line', data: dataBuffer.value }]
}));

connectMqtt();
</script>

<template>
  <VanNavBar title="实况" />
  <div class="rssi-chart">
    <VChart :option="chartOptions" autoresize style="width: 100%; height: 400px;" />
    <div v-if="isMqttConnected" class="status">📶 已连接 MQTT</div>
    <div v-else class="status">⏳ 连接中...</div>
  </div>
</template>

<style scoped>
.rssi-chart {
  width: 100%;
  height: 400px;
  background: #f5f7fb;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
.status {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}
</style>