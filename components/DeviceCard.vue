<script lang="ts" setup>
import type { Device } from '~/shared/types';

defineProps<{
  device: Device
}>()
</script>

<template>
  <div class="block rounded bg-white shadow p-2" @click="navigateTo(`/device/${device._id}`)">
    <div class="inline-flex items-center gap-x-1">
      <span class="font-bold">{{ device.name }}</span>
      <VanTag type="success">在线</VanTag>
    </div>
    <div class="text-sm text-gray">{{ device.description ?? '无描述' }}</div>
  </div>
</template>