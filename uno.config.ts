import { defineConfig, presetUno, transformerDirectives } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirectives()],
  shortcuts: {
    subheading: "m4 font-bold text-sm",
  },
});
