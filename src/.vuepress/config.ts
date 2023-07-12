import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "小孙同学Coding",
      description: "热爱可抵漫长岁月！",
    }
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
  
  plugins: [
    searchProPlugin({
      indexContent: true,
      // customFields: [
      //   {
      //     getter: (page) => page.frontmatter.category,
      //     formatter: "分类：$content",
      //   },
      //   {
      //     getter: (page) => page.frontmatter.tag,
      //     formatter: "标签：$content",
      //   },
      // ],
    }),
  ],
});
