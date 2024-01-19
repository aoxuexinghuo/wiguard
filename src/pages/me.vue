<script lang="ts" setup>
import { ElAvatar } from 'element-plus'
import { UserFilled } from '@element-plus/icons-vue'
</script>

<template>
  <div class="user">
    <ElAvatar size="large" :icon="UserFilled" />
    <span>用户</span>
  </div>
</template>

<style scoped>
.user {
  display: flex;
  padding: 20px;
  gap: 12px;
  background: linear-gradient(to bottom, transparent, #09569122);
}
</style>