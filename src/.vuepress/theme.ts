import { hopeTheme } from "vuepress-theme-hope";
import { navBar } from "./navbar/index.js";
import { sideBar } from "./sidebar/index.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default hopeTheme({

  hostname: "https://brain.sunguoqi.com",

  author: {
    name: "小孙同学",
    url: "https://sunguoqi.com",
  },

  iconAssets: "iconfont",

  logo: "/avatar.png",

  repo: "sun0225SUN/Brain",

  docsDir: "demo/theme-docs/src",

  locales: {
    "/": {
      // navbar
      navbar: navBar,

      // sidebar
      sidebar: sideBar,

      footer: "MIT Licensed | © sun0225SUN",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    }
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"]
    },
  },

  plugins: {

    comment: {
      // @ ts-expect-error: You should generate and use your own comment service
      provider: "Giscus",
      repo:"sun0225SUN/Brain",
      repoId:"R_kgDOJNZRqA",
      category:"General",
      categoryId:"DIC_kwDOJNZRqM4CWd6B",
      lazyLoading: true,
      reactionsEnabled: true,
      darkTheme: "dark",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
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

    feed: {
      rss: true,
    }

  },
});
