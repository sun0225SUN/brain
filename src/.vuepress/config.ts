import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  // 基础路径
  base: "/",
  // 网站信息
  locales: {
    "/": {
      lang: "zh-CN",
      title: "小孙同学Coding",
      description: "热爱可抵漫长岁月！",
    },
  },
  // 主题配置
  theme,
  // 插件配置
  plugins: [
    searchProPlugin({
      indexContent: true,
      customFields: [
        // {
        //   getter: (page) => page.frontmatter.category,
        //   formatter: "分类：$content",
        // },
        // {
        //   getter: (page) => page.frontmatter.tag,
        //   formatter: "标签：$content",
        // },
      ],
    }),
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
