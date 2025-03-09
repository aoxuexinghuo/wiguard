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
  <NuxtPage />
  <VanTabbar v-model="selected">
    <VanTabbarItem name="index" icon="wap-home-o" to="/">首页</VanTabbarItem>
    <VanTabbarItem name="live" icon="eye-o" to="/live">实况</VanTabbarItem>
    <VanTabbarItem name="stats" icon="bulb-o" to="/message">消息</VanTabbarItem>
    <VanTabbarItem name="profile" icon="user-circle-o" to="/profile">我的</VanTabbarItem>
  </VanTabbar>
</template>
