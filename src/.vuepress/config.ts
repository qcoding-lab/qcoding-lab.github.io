import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Qizhe's Blog",
  description: "My personal Website",

  theme,
  head:[
    ['link', {rel:'icon', href: '/assets/images/websiteIcon.png'}]
  ]




  // Enable it with pwa
  // shouldPrefetch: false,
});
