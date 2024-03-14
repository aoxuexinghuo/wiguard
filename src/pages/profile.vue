<template>
  <div class="profile">
    <div class="avatar">
      <van-icon name="user-o" size="30" color="white" />
    </div>
    <div class="name">测试用户</div>
  </div>
  <van-cell-group>
    <van-cell title="用户名" value="admin" />
  </van-cell-group>
  <van-button type="danger" block>退出登录</van-button>
</template>

<style scoped>
.profile {
  display: flex;
  padding: 10px;
  gap: 10px;
}

.name {
  font-size: 0.9rem;
}

.avatar {
  display: inline-block;
  padding: 10px;
  border-radius: 100%;
  background-color: lightgray;
}
</style>