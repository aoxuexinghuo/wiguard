<script lang="ts" setup>
import { ElTabs, ElTabPane } from 'element-plus'
import Device from './device.vue'
import Live from './live.vue'
import Stats from './stats.vue'
import Me from './me.vue'
</script>

<template>
  <ElTabs type="card" stretch>
    <ElTabPane label="设备">
      <Device />
    </ElTabPane>
    <ElTabPane label="实况">
      <Live />
    </ElTabPane>
    <ElTabPane label="统计">
      <Stats />
    </ElTabPane>
    <ElTabPane label="我的">
      <Me />
    </ElTabPane>
  </ElTabs>
</template>
