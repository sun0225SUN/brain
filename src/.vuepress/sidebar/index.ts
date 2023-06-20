import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/web/": [
    {
      icon: "guide",
      text: "前言",
      prefix: "front/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "HTML",
      icon: "html",
      prefix: "base/html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "CSS",
      icon: "css",
      prefix: "base/html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "JavaScript",
      icon: "javascript",
      prefix: "base/html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "ES6",
      icon: "es6",
      prefix: "base/html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Vue",
      icon: "vue",
      prefix: "advanced/vue/",
      // children: "structure",
      collapsible: true,
      children: [
        {
          text: "Hello",
          icon: "discover",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Learn",
          icon: "hot",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Use",
          icon: "operate",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Know",
          icon: "ask",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Love",
          icon: "like",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
      ],
    },
    {
      text: "React",
      icon: "react",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Angular",
      icon: "angular",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Node",
      icon: "nodeJS",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Nuxt",
      icon: "customize",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Next",
      icon: "software",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Electron",
      icon: "window",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "开发工具",
      icon: "operate",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "数据可视化",
      icon: "eye",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/cs/": [
   {
      icon: "discover",
      text: "前言",
      prefix: "web/",
      children: "structure",
      collapsible: true,
    }
  ],
  "/ai/": [
    {
       icon: "discover",
       text: "前言",
       prefix: "web/",
       children: "structure",
       collapsible: true,
     }
   ],
   "/en/": [
    {
       icon: "discover",
       text: "前言",
       prefix: "web/",
       children: "structure",
       collapsible: true,
     }
   ],
   "/life/": [
    {
       icon: "discover",
       text: "程序人生",
       prefix: "coder/",
       children: "structure",
       collapsible: true,
     },
     {
      icon: "discover",
      text: "生存指南",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    },
     {
      icon: "discover",
      text: "延寿指南",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "discover",
      text: "恋爱指南",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "discover",
      text: "做饭指南",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    }
   ],
});
