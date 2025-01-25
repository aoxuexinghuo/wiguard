<script setup lang="ts">
import useUser from '~/utils/user';

const user = useUser();
const userForm = reactive({
  username: "",
  password: ""
});

const login = () => {
  $fetch("/api/user/login", {
    method: "POST",
    body: userForm
  }).then((res) => {
    user.value = res;
    showNotify({ message: '登录成功', type: 'success' });
    navigateTo('/profile');
  }).catch((err) => {
    showNotify(`登录失败: ${err.data.message}`);
  });
}

const register = () => {
  $fetch("/api/user/register", {
    method: "POST",
    body: userForm
  }).then((res) => {
    showNotify({ message: '注册成功', type: 'success' });
  }).catch((err) => {
    showNotify(`注册失败: ${err.data.message}`);
  });
}
</script>

<template>
  <VanForm>
    <VanCellGroup inset>
      <VanField label="用户名" v-model="userForm.username" />
      <VanField label="密码" v-model="userForm.password" type="password" />
    </VanCellGroup>
    <div class="m4 flex gap-4">
      <VanButton block @click="register">注册</VanButton>
      <VanButton type="primary" block @click="login">登录</VanButton>
    </div>
  </VanForm>
</template>