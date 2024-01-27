<script setup lang="ts">
import { ref, watch } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref('home')
watch(router.currentRoute, route => active.value = route.name as string)
watch(active, name => router.push({ name }))

</script>

<template>
  <RouterView />
  <Tabbar v-model="active">
    <TabbarItem name="index" icon="wap-home-o">首页</TabbarItem>
    <TabbarItem name="live" icon="eye-o">实况</TabbarItem>
    <TabbarItem name="stats" icon="bar-chart-o">统计</TabbarItem>
    <TabbarItem name="profile" icon="user-circle-o">我的</TabbarItem>
  </Tabbar>
</template>