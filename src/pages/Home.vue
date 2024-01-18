<script lang="ts" setup>
import { ElButton } from 'element-plus';
</script>

<template>
  <div class="logo">
    <h1>微智护</h1>
    <h2>WiGuard</h2>
  </div>

  <RouterLink to="/login">
    <ElButton type="primary" size="large" class="login">登录</ElButton>
  </RouterLink>
</template>

<style scoped>
.logo {
  margin: 60px 0 0 15%;
  display: inline-flex;
  flex-direction: column;
  background: linear-gradient(to right bottom, #65a4df, #0a5d6a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo * {
  margin: 0;
}

.login {
  left: 50%;
  transform: translateX(-50%);
  width: min(80%, 300px);
  position: absolute;
  bottom: 40px;
}
</style>
