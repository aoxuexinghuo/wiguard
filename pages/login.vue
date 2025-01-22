<script setup lang="ts">
const user = reactive({
  username: "",
  password: ""
})
</script>

<template>
  <VanForm>
    <VanCellGroup inset>
      <VanField label="用户名" v-model="user.username" />
      <VanField label="密码" v-model="user.password" />
    </VanCellGroup>
    <div class="m4">
      <VanButton type="primary" block>登录</VanButton>
    </div>
  </VanForm>
</template>