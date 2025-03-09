<script setup lang="ts">
const { data: devices } = useFetch("/api/devices");
</script>

<template>
  <div class="subheading">设备列表</div>
  <div v-if="devices" class="m4 grid grid-cols-2 gap-2">
    <DeviceCard v-for="device in devices" :device="device" />
  </div>
  <VanSkeleton v-else />
</template>
