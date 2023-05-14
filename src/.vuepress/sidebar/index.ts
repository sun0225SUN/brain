import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/web/": [
    {
      icon: "discover",
      text: "前言",
      prefix: "front/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "HTML",
      icon: "note",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "CSS",
      icon: "note",
      prefix: "css/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "JavaScript",
      icon: "note",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "ES6",
      icon: "note",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Vue",
      icon: "note",
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
    },
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
       prefix: "programmer/",
       children: "structure",
       collapsible: true,
     }
   ],
});
