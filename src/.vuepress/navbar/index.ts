import { navbar } from "vuepress-theme-hope";

export const navBar = navbar([
  "/",
  { 
    text: "Web开发",
    icon: "discover",
    prefix: "/",
    children: [
      {
        text: "基础",
        icon: "creative",
        prefix: "web/",
        children: [
          { text: "HTML", icon: "more", link: "html/" },
          { text: "CSS", icon: "more", link: "css/" },
          { text: "JavaScript", icon: "more", link: "javascript/" }]
      },
      {
        text: "进阶",
        icon: "config",
        prefix: "web/",
        children: [
          { text: "ES6", icon: "more", link: "es6/" },
          { text: "Vue", icon: "more", link: "vue/" },
          { text: "React", icon: "more", link: "react/" },
          { text: "Node", icon: "more", link: "node/" }
        ],
      },
      {
        text: "全栈",
        icon: "config",
        prefix: "web/",
        children: [
          { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  { 
    text: "CS基础",
    icon: "discover",
    prefix: "/",
    children: [
      {
        text: "数据结构",
        icon: "creative",
        link: "666/",
      },
      {
        text: "操作系统",
        icon: "creative",
        link: "777/",
      },
      {
        text: "计算机网络",
        icon: "creative",
        link: "888/",
      },
      {
        text: "计算机组成原理",
        icon: "creative",
        link: "999/",
      },
    ]
  },
  { text: "人工智能", icon: "discover", link: "/ai/" },
  { text: "实用英语", icon: "discover", link: "/en/" },
  {
    text: "程序人生",
    icon: "creative",
    prefix: "/life",
    children: [
      {
        text: "程序人生",
        icon: "creative",
        link: "/programmer"
      },
      {
        text: "自我修养",
        icon: "creative",
        link: "/hhh"
      },
    ],
  },
  { text: "关于我", link: "/slides/about.md", icon: "config" },
]);
