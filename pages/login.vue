<script setup lang="ts">
const { fetch } = useUserSession();
const userForm = reactive({
  username: "",
  password: "",
});

const login = () => {
  $fetch("/api/user/login", {
    method: "POST",
    body: userForm,
  })
    .then(async (res) => {
      showNotify({ message: "登录成功", type: "success" });
      await fetch();
      navigateTo("/");
    })
    .catch((err) => {
      showNotify(`登录失败: ${err.data.message}`);
    });
};

const register = () => {
  $fetch("/api/user/register", {
    method: "POST",
    body: userForm,
  })
    .then((res) => {
      showNotify({ message: "注册成功", type: "success" });
    })
    .catch((err) => {
      showNotify(`注册失败: ${err.data.message}`);
    });
};
</script>

<template>
  <VanNavBar title="登录" />
  <VanForm>
    <VanCellGroup>
      <VanField label="用户名" v-model="userForm.username" />
      <VanField label="密码" v-model="userForm.password" type="password" />
    </VanCellGroup>
    <div class="m4 flex gap-4">
      <VanButton block @click="register">注册</VanButton>
      <VanButton type="primary" block @click="login">登录</VanButton>
    </div>
  </VanForm>
</template>
