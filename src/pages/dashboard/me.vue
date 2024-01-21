<script lang="ts" setup>
import { ElAvatar, ElButton } from 'element-plus'
import { UserFilled } from '@element-plus/icons-vue'
</script>

<template>
  <div class="user">
    <ElAvatar size="large" :icon="UserFilled" />
    <span>用户</span>
  </div>
  <ElButton type="primary">退出登录</ElButton>
</template>

<style scoped>
.user {
  display: flex;
  padding: 20px;
  gap: 12px;
  background: linear-gradient(to bottom, transparent, #157fcf22);
}
</style>