// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["nuxt-auth-utils", "nuxt-echarts", "@unocss/nuxt", "@vant/nuxt"],
  app: {
    head: {
      title: "微智护",
    },
  },
  echarts: {
    charts: ['LineChart'],
    components: [
      'DatasetComponent',  // 结构化数据
      'GridComponent',     // 控制布局
      'TooltipComponent',  // 鼠标提示
      'LegendComponent',   // 图例
      'TitleComponent',    // 标题
      'DataZoomComponent', // 缩放
    ],
  },
  runtimeConfig: {
    public: {
      mqttBrokerUri: "",
    },
  },
});