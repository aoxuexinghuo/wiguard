<script lang="ts" setup>
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: ''
})

const login = () => {
  console.log('login')
}
</script>

<template>
  <ElForm label-width="60px" class="form">
    <ElFormItem label="用户名">
      <ElInput v-model="form.username" />
    </ElFormItem>
    <ElFormItem label="密码">
      <ElInput v-model="form.password" type="password" show-password />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="login">登录</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<style scoped>
.form {
  max-width: 600px;
  margin: 100px auto;
  padding: 0 20px;
}
</style>