import { navbar } from "vuepress-theme-hope";

export const navBar = navbar([
  "/",
  { text: "Web开发", icon: "window", link: "/web/foreword/history" },
  { text: "CS基础", icon: "computer", link: "/cs/" },
  { text: "人工智能", icon: "interact", link: "/ai/" },
  { text: "实用英语", icon: "language", link: "/en/" },
  { text: "程序人生", icon: "people", link: "/life/coder/leijun" },
]);
