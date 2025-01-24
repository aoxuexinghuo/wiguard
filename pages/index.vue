<script setup lang="ts">
import getUser from '~/utils/user';

const user = ref();

onMounted(() => {
  user.value = getUser();
});
</script>

<template>
  <VanSteps>
    <VanStep>本机</VanStep>
    <VanStep>网关</VanStep>
    <VanStep>终端</VanStep>
  </VanSteps>
  <div class="subheading">设备列表</div>
  <VanSkeleton row="5" />
</template>
