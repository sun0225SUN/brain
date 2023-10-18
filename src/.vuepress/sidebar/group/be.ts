// @ts-ignore
import { arraySidebar } from "vuepress-theme-hope";

export const be = arraySidebar([
  {
    icon: "Go",
    text: "go",
    prefix: "go/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "Java",
    icon: "java",
    prefix: "java/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "Rust",
    icon: "rust",
    prefix: "rust/",
    children: "structure",
    collapsible: true,
  },
  {
    icon: "Python",
    text: "python",
    prefix: "python/",
    children: "structure",
    collapsible: true,
  },
]);
