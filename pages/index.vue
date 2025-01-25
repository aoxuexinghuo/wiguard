<script setup lang="ts">
import type { Device } from '~/shared/types';

const { data: devices } = useFetch<Device[]>('/api/devices');
</script>

<template>
  <div class="subheading">设备列表</div>
  <div v-if="devices" class="m4 grid grid-cols-2 gap-2">
    <DeviceCard v-for="device in devices" :device="device" />
  </div>
  <VanSkeleton v-else />
</template>
