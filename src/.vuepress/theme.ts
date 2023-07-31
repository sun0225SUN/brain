import { navBar } from "./navbar/index.js";
import { sideBar } from "./sidebar/index.js";
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://brain.sunguoqi.com",

  author: {
    name: "小孙同学",
    url: "https://blog.sunguoqi.com",
  },

  logo: "/avatar.png",

  repo: "sun0225SUN/Brain",

  docsDir: "/src",

  iconAssets: ["//at.alicdn.com/t/c/font_4184658_wi3zjbd4w1.css"],

  locales: {
    "/": {
      navbar: navBar,
      sidebar: sideBar,
      footer: "GPL Licensed | © sun0225SUN",
      displayFooter: false,
      blog: {
        description: "路虽远行则将至，事虽难做则必成！",
        intro: "https://blog.sunguoqi.com/about",
      },
      blogLocales: {
        tutorial: "Tutorial",
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  blog: {
    // 时间线标题
    timeline: "好好学习，天天向上",
    // 社交媒体
    medias: {
      Twitter: "https://twitter.com/sun0225SUN",
      Zhihu: "https://www.zhihu.com/people/sunguoqi",
      BiliBili: "https://space.bilibili.com/448488855/",
      GitHub: "https://github.com/sun0225UN",
      Gitee: "https://gitee.com/sun0225SUN",
      Gmail: "mailto:sun412926@gmail.com",
      Youtube: "https://www.youtube.com/@sun0225SUN",
      Wechat: "https://box.sunguoqi.com/weixin_mp/",
    },
  },

  // 全屏按钮
  fullscreen: false,

  plugins: {
    // 博客设置
    blog: true,
    // 评论设置
    comment: {
      // @ ts-expect-error: You should generate and use your own comment service
      provider: "Giscus",
      repo: "sun0225SUN/Brain",
      repoId: "R_kgDOJNZRqA",
      category: "General",
      categoryId: "DIC_kwDOJNZRqM4CWd6B",
      mapping: "title",
      lazyLoading: false,
      reactionsEnabled: true,
      darkTheme: "dark",
    },

    // all features are enabled for demo, only preserve features you need here
    // Markdown 增强
    mdEnhance: {
      card: true,
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      imgMark: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      // 幻灯片
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    pwa: {
      favicon: "/avatar.png",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    // RSS
    feed: {
      rss: true,
    },

    // 内置组件
    components: {
      // 你想使用的组件
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
});
