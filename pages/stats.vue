<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";

const testRate = ref(0);
const warnRate = ref(0);
const data = reactive({
  test: 20,
  warn: 0,
});
</script>

<template>
  <div class="subheading">统计信息</div>
  <div class="bg-white">
    <VanCircle
      :text="`检测${data.test}次`"
      :rate="data.test"
      v-model:current-rate="testRate"
      speed="100"
    />
    <VanCircle
      :text="`警告${data.warn}次`"
      :rate="data.warn"
      v-model:current-rate="warnRate"
      speed="100"
      color="gold"
    />
  </div>
  <div class="subheading">历史记录</div>
  <VanCellGroup>
    <VanCell title="发现异常" label="2024-02-21 16:32:01" />
  </VanCellGroup>
</template>
