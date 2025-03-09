<script lang="ts" setup>
import type { Device } from "@prisma/client";

defineProps<{
  device: Device;
}>();
</script>

<template>
  <div
    class="p-2 rounded bg-white hover:shadow transition-shadow cursor-pointer"
    @click="navigateTo(`/device/${device.id}`)"
  >
    <div class="inline-flex items-center gap-x-1">
      <span class="font-bold">{{ device.name }}</span>
      <VanTag type="success">在线</VanTag>
      <VanTag>{{ device.type }}</VanTag>
    </div>
    <div class="text-sm text-gray">{{ device.description || "无描述" }}</div>
  </div>
</template>
