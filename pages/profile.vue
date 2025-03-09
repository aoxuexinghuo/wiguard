<script lang="ts" setup>
const { user, clear } = useUserSession();
</script>

<template>
  <div class="p4 flex gap-2 bg-white">
    <VanIcon
      class="p2 rounded-full bg-gray-3"
      name="user-o"
      size="30"
      color="white"
    />
    <div class="text-sm">{{ user?.username ?? "未登录" }}</div>
  </div>
  <div v-if="user">
    <VanCellGroup>
      <VanCell title="UID" :value="user.id" />
    </VanCellGroup>
    <div class="m4">
      <VanButton type="danger" block @click="clear">退出登录</VanButton>
    </div>
  </div>
  <div v-else>
    <div class="m4">
      <VanButton type="primary" block to="/login">登录</VanButton>
    </div>
  </div>
</template>
