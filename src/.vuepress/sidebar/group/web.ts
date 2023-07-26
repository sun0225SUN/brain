import { arraySidebar } from "vuepress-theme-hope";

export const web = arraySidebar([
  {
    icon: "guide",
    text: "Foreword",
    prefix: "foreword/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "HTML",
    icon: "html5",
    prefix: "html/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "CSS",
    icon: "css3",
    prefix: "css/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "JS",
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
        prefix: "learn/",
        children: [
          {
            text: "基础",
            icon: "discover",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "深入组件",
            icon: "discover",
            prefix: "components/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "逻辑复用",
            icon: "discover",
            prefix: "reusability/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "内置组件",
            icon: "discover",
            prefix: "built-ins/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "应用规范化",
            icon: "discover",
            prefix: "scaling-up/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "最佳实践",
            icon: "discover",
            prefix: "best-practices/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "TypeScript",
            icon: "discover",
            prefix: "typescript/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "进阶主题",
            icon: "discover",
            prefix: "extras/",
            children: "structure",
            collapsible: true,
          },
        ],
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
    collapsible: true,
  },
  {
    text: "Node",
    icon: "nodejs",
    prefix: "html/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "Nuxt",
    icon: "nuxt",
    prefix: "html/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "DevTools",
    icon: "tools",
    prefix: "html/",
    children: "structure",
    collapsible: true,
  },
]);