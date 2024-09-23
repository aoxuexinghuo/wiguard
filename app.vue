<script setup lang="ts">
import { ref, watch } from 'vue'
import './style.css'

const router = useRouter()
const activeTab = ref(router.currentRoute.value.name as string ?? 'index')
watch(activeTab, name => router.push({ name }))
</script>

<template>
  <VanNavBar title="微智护" />
  <NuxtPage />
  <VanTabbar v-model="activeTab">
    <VanTabbarItem name="index" icon="wap-home-o">首页</VanTabbarItem>
    <VanTabbarItem name="live" icon="eye-o">实况</VanTabbarItem>
    <VanTabbarItem name="stats" icon="bar-chart-o">统计</VanTabbarItem>
    <VanTabbarItem name="profile" icon="user-circle-o">我的</VanTabbarItem>
  </VanTabbar>
</template>
