<script lang="ts" setup>
import useUser from '~/utils/user';

const user = useUser();


const logout = () => {
  $fetch('/api/user/logout');
  user.value = undefined;
}
</script>

<template>
  <div class="p4 flex gap-2 bg-white">
    <VanIcon class="p2 rounded-full bg-gray-3" name="user-o" size="30" color="white" />
    <div class="text-sm">{{ user?.username ?? '未登录' }}</div>
  </div>
  <div v-if="user">
    <VanCellGroup>
      <VanCell title="UID" :value="user._id" />
    </VanCellGroup>
    <div class="m4">
      <VanButton type="danger" block @click="logout">退出登录</VanButton>
    </div>
  </div>
  <div v-else>
    <div class="m4">
      <VanButton type="primary" block to="/login">登录</VanButton>
    </div>
  </div>
</template>
