import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Qizhe's Blog",
  description: "My personal Website",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
