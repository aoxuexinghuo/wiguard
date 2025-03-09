<script lang="ts" setup>
import type { Device } from "@prisma/client";

defineProps<{
  device: Device;
}>();
</script>

<template>
  <div
    class="p-2 rounded bg-white cursor-pointer"
    @click="navigateTo(`/device/${device.id}`)"
  >
    <div class="inline-flex flex-wrap items-center gap-x-1">
      <span class="font-bold">{{ device.name }}</span>
      <VanTag>{{ device.type }}</VanTag>
    </div>
    <div class="text-sm text-green">在线</div>
  </div>
</template>
