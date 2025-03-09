<script setup lang="ts">
import type { Device } from "@prisma/client";

const device = reactive({
  name: "",
  type: "",
  description: "",
});

function createDevice() {
  $fetch("/api/devices", {
    method: "POST",
    body: {
      name: device.name,
      type: device.type,
      description: device.description,
    },
  })
    .then(() => {
      showNotify({ message: "设备创建成功", type: "success" });
      navigateTo("/");
    })
    .catch((error) => {
      showNotify({ message: error.data.message, type: "danger" });
    });
}
</script>

<template>
  <VanNavBar title="添加设备" />
  <VanCellGroup>
    <VanField v-model="device.name" label="名称" />
    <VanField v-model="device.type" label="类型" />
    <VanField
      v-model="device.description!"
      label="描述"
      type="textarea"
      autosize
    />
    <div class="m4">
      <VanButton type="primary" block @click="createDevice">添加设备</VanButton>
    </div>
  </VanCellGroup>
</template>
