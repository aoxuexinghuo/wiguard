<script lang="ts" setup>
import { ElTabs, ElTabPane } from 'element-plus'
import Stats from './stats.vue'
import Me from './me.vue'
</script>

<template>
  <ElTabs type="card" stretch>
    <ElTabPane label="首页"></ElTabPane>
    <ElTabPane label="告警">
      <Stats />
    </ElTabPane>
    <ElTabPane label="统计"></ElTabPane>
    <ElTabPane label="我的">
      <Me />
    </ElTabPane>
  </ElTabs>
</template>

<style></style>