// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@vant/nuxt", "nuxt-echarts"],
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
