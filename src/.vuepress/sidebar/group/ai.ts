import { arraySidebar } from "vuepress-theme-hope";

export const ai = arraySidebar([
  {
    icon: "discover",
    text: "前言",
    prefix: "web/",
    children: "structure",
    collapsible: true,
  },
  {
    icon: "python",
    text: "Python",
    prefix: "python/",
    children: "structure",
    collapsible: true,
  },
]);
