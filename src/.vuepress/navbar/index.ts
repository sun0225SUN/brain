import { navbar } from "vuepress-theme-hope";

export const navBar = navbar([
  "/",
  { text: "Web开发", icon: "window", link: "/web/" },
  { text: "数据可视化", icon: "eye", link: "/dv/" },
  { text: "人工智能", icon: "interact", link: "/ai/" },
  { text: "实用英语", icon: "language", link: "/en/" },
  { text: "程序人生", icon: "people", link: "/life/coder/leijun" },
]);
