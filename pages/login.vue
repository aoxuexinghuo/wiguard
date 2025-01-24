<script setup lang="ts">
const user = reactive({
  username: "",
  password: ""
});

const login = () => {
  $fetch("/api/user/login", {
    method: "POST",
    body: user
  }).then((res) => {
    showNotify({ message: '登录成功', type: 'success' });
    navigateTo('/');
  }).catch((err) => {
    console.error(err);
    showNotify(`登录失败: ${err.message}`);
  });
}

const register = () => {
  $fetch("/api/user/register", {
    method: "POST",
    body: user
  }).then((res) => {
    showNotify({ message: '注册成功', type: 'success' });
  }).catch((err) => {
    console.error(err);
    showNotify(`注册失败: ${err.message}`);
  });
}
</script>

<template>
  <VanForm>
    <VanCellGroup inset>
      <VanField label="用户名" v-model="user.username" />
      <VanField label="密码" v-model="user.password" type="password" />
    </VanCellGroup>
    <div class="m4 flex gap-4">
      <VanButton block @click="register">注册</VanButton>
      <VanButton type="primary" block @click="login">登录</VanButton>
    </div>
  </VanForm>
</template>