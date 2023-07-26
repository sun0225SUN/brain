import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  // 基础路径
  base: "/",
  //头部引入，这里引入的是51la统计
  head: [["link", { type: "text/javascript", href: "/assets/js/51la.js" }]],
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
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
