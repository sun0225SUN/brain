import { defineClientConfig } from "@vuepress/client";

// @ts-ignore
import WeChat from "./components/Wechat.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("WeChat", WeChat);
  },
});
