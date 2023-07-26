import { navbar } from "vuepress-theme-hope";

export const navBar = navbar([
  "/",
  { text: "Web开发", icon: "window", link: "/web/foreword/history" },
  { text: "数据可视化", icon: "palette", link: "/dv/basic/00" },
  { text: "人工智能", icon: "interact", link: "/ai/basic/test.md" },
  { text: "实用英语", icon: "language", link: "/en/basic/test.md" },
  { text: "程序人生", icon: "people", link: "/life/coder/leijun.md" },
]);
