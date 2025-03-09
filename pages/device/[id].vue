<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const { data: device, error } = await useFetch(`/api/devices/${id}`);

const deleteDevice = async () => {
  $fetch(`/api/devices/${id}`, { method: "DELETE" })
    .then(() => {
      showNotify({ message: "删除成功", type: "success" });
      navigateTo("/");
    })
    .catch((err) => {
      showNotify(`删除失败: ${err.message}`);
    });
};
</script>

<template>
  <VanCellGroup v-if="device">
    <VanCell title="名称" :value="device.name" />
    <VanCell title="描述" :value="device.description" />
    <VanCell title="Token" :value="device.token" />
    <div class="m4">
      <VanButton type="danger" block @click="deleteDevice">删除设备</VanButton>
    </div>
  </VanCellGroup>

  <VanEmpty v-else-if="error" :description="error.data.message" />
  <div v-else class="my4">
    <VanSkeleton row="3" />
  </div>
</template>
