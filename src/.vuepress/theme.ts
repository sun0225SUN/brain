import { navBar } from "./navbar/index.js";
import { sideBar } from "./sidebar/index.js";
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme(
  {
    docsDir: "/src",
    repo: "sun0225SUN/Brain",
    logo: "/avatar.png",
    hostname: "https://brain.sunguoqi.com",

    iconAssets: ["//at.alicdn.com/t/c/font_4184658_d8uj8sy867l.css"],

    navbar: navBar,
    sidebar: sideBar,
    footer: "GPL Licensed | © sun0225SUN",
    displayFooter: false,
    blog: {
      description: "路虽远行则将至，事虽难做则必成！",
      intro: "https://blog.sunguoqi.com/about",
      timeline: "好好学习，天天向上",
    },
    metaLocales: {
      editLink: "编辑此页",
    },

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["WeChat", "Outlook", "Repo", "Search"],
    },

    plugins: {
      blog: true,

      feed: {
        rss: true,
      },

      comment: {
        provider: "Giscus",
        repo:'sun0225SUN/brain',
        repoId:'R_kgDOJNZRqA',
        category:'General',
        categoryId:'DIC_kwDOJNZRqM4CWd6B',
        mapping:'title',
        strict:true,
        reactionsEnabled:true,
        inputPosition:'bottom',
      },

      mdEnhance: {
        tabs: true,
        codetabs: true,
        chart: true,
        echarts: true,
        mermaid: true,
        katex: true,
        vuePlayground: true,
        sub: true,
        sup: true,
        demo: true,
        tasklist: true,
        // card: true,
        figure: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        include: true,
        attrs: true,
        mark: true,
        markmap: true,
        footnote: true,
        align: true,
      },

      components: {
        components: [
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "StackBlitz",
          "VideoPlayer",
          "YouTube",
        ],
      },
    },
  },
  { custom: true }
);
