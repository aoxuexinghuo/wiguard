<script setup>
import { ref, computed } from "vue";
import mqtt from "mqtt";

const { user, loggedIn } = useUserSession();

const runtimeConfig = useRuntimeConfig();
const dataBuffer = ref(Array(100).fill(null));

onMounted(() => {
  if (loggedIn) {
    const mqttClient = mqtt.connect(runtimeConfig.public.mqttBrokerUri, {
      username: user.value.username,
      password: user.value.username,
    });
    mqttClient.on("connect", () => {
      console.log(
        `Connected to MQTT broker at ${runtimeConfig.public.mqttBrokerUri}`
      );
      mqttClient.subscribe(`user/${user.value.username}`);
    });
    mqttClient.on("message", (_, message) => {
      console.log(`Received message: ${message.toString()}`);

      const rssi = parseFloat(message.toString());
      dataBuffer.value.shift();
      dataBuffer.value.push(rssi);
    });
  }
});

const chartOptions = computed(() => ({
  xAxis: {
    type: "category",
  },
  yAxis: {
    type: "value",
    max: 0,
    min: -100,
    name: "RSSI",
  },
  series: [{ type: "line", smooth: true, data: dataBuffer.value }],
}));
</script>

<template>
  <VanNavBar title="实况" />
  <VChart
    v-if="loggedIn"
    :option="chartOptions"
    autoresize
    style="width: 100%; height: 400px"
  />
  <VanEmpty v-else description="请先登录" />
</template>
