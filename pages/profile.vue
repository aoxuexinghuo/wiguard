<template>
  <div class="profile">
    <div class="avatar">
      <VanIcon name="user-o" size="30" color="white" />
    </div>
    <div class="name">微智护用户</div>
  </div>
  <VanCellGroup>
    <VanCell title="用户名" value="guest" />
  </VanCellGroup>
  <div class="m4">
    <VanButton type="danger" block>修改密码</VanButton>
  </div>
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