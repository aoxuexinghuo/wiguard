<script setup lang="ts">
import type { Device } from "@prisma/client";

const { user } = useUserSession();
const devices = ref<Device[]>([]);

const loading = ref(false);

async function refresh() {
  loading.value = true;
  devices.value = await $fetch<Device[]>("api/devices");
  loading.value = false;
}

onMounted(refresh);
</script>

<template>
  <VanNavBar title="微智护" />
  <div class="subheading">设备列表</div>
  <VanPullRefresh
    v-if="user"
    class="min-h-50vh"
    v-model="loading"
    @refresh="refresh"
  >
    <div v-if="devices.length" class="m4 grid grid-cols-2 gap-2">
      <DeviceCard v-for="device in devices" :device="device" />
      <div
        class="rounded bg-white text-sm p-2 font-bold"
        @click="navigateTo('/device/new')"
      >
        添加设备
      </div>
    </div>
    <VanSkeleton v-else />
  </VanPullRefresh>
  <VanEmpty v-else description="无数据">
    <VanButton type="primary" to="/login" size="small">请先登录</VanButton>
  </VanEmpty>
</template>
