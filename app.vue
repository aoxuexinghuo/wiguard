<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref('home')
watch(router.currentRoute, route => active.value = route.name?.toString() ?? 'home')
watch(active, name => router.push({ name }))

</script>

<template>
  <VanNavBar title="微智护" />
  <NuxtPage />
  <VanTabbar v-model="active">
    <VanTabbarItem name="index" icon="wap-home-o">首页</VanTabbarItem>
    <VanTabbarItem name="live" icon="eye-o">实况</VanTabbarItem>
    <VanTabbarItem name="stats" icon="bar-chart-o">统计</VanTabbarItem>
    <VanTabbarItem name="profile" icon="user-circle-o">我的</VanTabbarItem>
  </VanTabbar>
</template>
