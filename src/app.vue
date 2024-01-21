<script lang="ts" setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(() => route.meta, (meta) => {
  document.title = meta.title as string
})

</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
  <div class="sider">
    <img src="/qrcode.svg" alt="qrcode" width="100%" />
    <span>扫码手机浏览</span>
  </div>
</template>

<style>
*:not(input, textarea, select) {
  user-select: none;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #f3f3f3;
}

.wrapper {
  position: relative;
  margin: auto;
  max-width: 800px;
  height: 100vh;
  background: white;
  overflow-y: auto;
  overflow-x: hidden;
}

.sider {
  font-size: 0.9rem;
  position: fixed;
  top: 200px;
  right: calc(50% - 510px);
  width: 100px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
</style>