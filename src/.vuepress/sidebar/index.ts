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
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "CSS",
      icon: "css",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "JavaScript",
      icon: "javascript",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "ES6",
      icon: "es6",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Vue",
      icon: "vue",
      prefix: "vue/",
      // children: "structure",
      collapsible: true,
      children: [
        {
          text: "Hello",
          icon: "anonymous",
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
      text: "Node",
      icon: "nodeJS",
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
    }
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
