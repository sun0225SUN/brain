import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
// @ts-ignore
import { getDirname, path } from "vuepress/utils";
// @ts-ignore
import { searchProPlugin } from "vuepress-plugin-search-pro";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // 基础路径
  base: "/",
  //头部引入，这里引入的是 51la 统计
  head: [["script", { type: "text/javascript", src: "/assets/js/51la.js" }]],
  // 网站信息
  locales: {
    "/": {
      lang: "zh-CN",
      title: "小孙同学 Coding",
      description: "热爱可抵漫长岁月！",
    },
  },
  // 主题配置
  theme,
  // 根据别名添加功能
  alias: {
    "@theme-hope/modules/info/components/TOC": path.resolve(
      __dirname,
      "./components/toc.vue"
    ),
  },
  // 插件配置
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
