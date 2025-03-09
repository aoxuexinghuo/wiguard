<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const { data: device, error } = await useFetch(`/api/devices/${id}`);

function deleteDevice() {
  showConfirmDialog({
    title: "删除设备",
    message: "确定要删除这个设备吗？",
  }).then(async () => {
    $fetch(`/api/devices/${id}`, { method: "DELETE" })
      .then(() => {
        showNotify({ message: "删除成功", type: "success" });
        navigateTo("/");
      })
      .catch((err) => {
        showNotify(`删除失败: ${err.message}`);
      });
  });
}

function updateDevice() {
  $fetch(`/api/devices/${id}`, {
    method: "PUT",
    body: {
      name: device.value?.name,
      type: device.value?.type,
      description: device.value?.description,
    },
  })
    .then(() => {
      showNotify({ message: "保存成功", type: "success" });
    })
    .catch((err) => {
      showNotify(`保存失败: ${err.message}`);
    });
}
</script>

<template>
  <VanNavBar title="设备详情" />
  <VanCellGroup v-if="device">
    <VanField v-model="device.name" label="名称" />
    <VanField v-model="device.type" label="类型" />
    <VanField
      v-model="device.description!"
      label="描述"
      type="textarea"
      autosize
    />
    <VanCell title="Token" :value="device.token" />
    <div class="m4 flex gap-4">
      <VanButton type="danger" block @click="deleteDevice">删除设备</VanButton>
      <VanButton type="primary" block @click="updateDevice">保存修改</VanButton>
    </div>
  </VanCellGroup>

  <VanEmpty v-else-if="error" :description="error.data.message" />
  <div v-else class="my4">
    <VanSkeleton row="3" />
  </div>
</template>
