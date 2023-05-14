import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/web/": [
    {
      icon: "discover",
      text: "前言",
      prefix: "front/",
      children: "structure",
    },
    {
      text: "HTML",
      icon: "note",
      prefix: "html/",
      children: "structure",
    },
    {
      text: "CSS",
      icon: "note",
      prefix: "css/",
      children: "structure",
    },
    {
      text: "JavaScript",
      icon: "note",
      prefix: "html/",
      children: "structure",
    },
    {
      text: "ES6",
      icon: "note",
      prefix: "html/",
      children: "structure",
    },
    {
      text: "Vue",
      icon: "note",
      prefix: "html/",
      children: "structure",
    }
  ],
  "/cs/": [
   {
      icon: "discover",
      text: "前言",
      prefix: "web/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "前言",
      prefix: "web/",
      children: "structure",
    }
  ],
  "/ai/": [
    {
       icon: "discover",
       text: "前言",
       prefix: "web/",
       children: "structure",
     }
   ],
   "/en/": [
    {
       icon: "discover",
       text: "前言",
       prefix: "web/",
       children: "structure",
     }
   ],
   "/life/": [
    {
       icon: "discover",
       text: "程序人生",
       prefix: "programmer/",
       children: "structure",
     }
   ],
});
