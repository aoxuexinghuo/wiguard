<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref('home')
watch(router.currentRoute, route => active.value = route.name?.toString() ?? 'home')
watch(active, name => router.push({ name }))

</script>

<template>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item name="index" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item name="live" icon="eye-o">实况</van-tabbar-item>
    <van-tabbar-item name="stats" icon="bar-chart-o">统计</van-tabbar-item>
    <van-tabbar-item name="profile" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>
</template>