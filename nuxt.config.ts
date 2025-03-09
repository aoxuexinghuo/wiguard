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
    charts: ["HeatmapChart"],
    components: [
      "LegendComponent",
      "TooltipComponent",
      "GridComponent",
      "VisualMapComponent",
    ],
  },
  runtimeConfig: {
    public: {
      mqttBrokerUri: "",
    },
  },
});
