<script setup lang="ts">
import { ref } from 'vue'
import '@unocss/reset/normalize.css'
import './style.css'

const route = useRoute()
const selected = ref()

watchEffect(() => {
  selected.value = route.name?.toString()
})
</script>

<template>
  <VanNavBar title="微智护" />
  <NuxtPage />
  <VanTabbar v-model="selected">
    <VanTabbarItem name="index" icon="wap-home-o" to="/">首页</VanTabbarItem>
    <VanTabbarItem name="live" icon="eye-o" to="/live">实况</VanTabbarItem>
    <VanTabbarItem name="stats" icon="bar-chart-o" to="/stats">统计</VanTabbarItem>
    <VanTabbarItem name="profile" icon="user-circle-o" to="/profile">我的</VanTabbarItem>
  </VanTabbar>
</template>
