<script lang="ts" setup>
const { user, clear } = useUserSession();
</script>

<template>
  <VanNavBar title="我的" />
  <VanCellGroup>
    <div class="p-4 flex gap-2">
      <VanIcon
        class="p-2 rounded-full bg-gray-3"
        name="user-o"
        size="32"
        color="white"
      />
      <div>
        <div class="font-bold">{{ user?.username ?? "未登录" }}</div>
        <div class="text-sm">UID: {{ user?.id }}</div>
      </div>
    </div>
    <VanCell title="我的设备" to="/" isLink />
    <VanCell title="实时监测" to="/live" isLink />
    <VanCell title="消息通知" to="/message" isLink />
    <VanCell title="帮助中心" isLink />
  </VanCellGroup>
  <div class="m-4">
    <VanButton v-if="user" type="danger" block @click="clear"
      >退出登录</VanButton
    >
    <VanButton v-else type="primary" block to="/login">登录</VanButton>
  </div>
</template>
