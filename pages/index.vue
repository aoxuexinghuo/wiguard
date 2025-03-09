<script setup lang="ts">
const { user } = useUserSession();
const { data: devices } = useFetch("/api/devices");
</script>

<template>
  <div class="subheading">设备列表</div>
  <div v-if="user">
    <div v-if="devices" class="m4 grid grid-cols-2 gap-2">
      <DeviceCard v-for="device in devices" :device="device" />
    </div>
    <VanSkeleton v-else />
  </div>
  <VanEmpty v-else description="尚未登录" />
</template>
