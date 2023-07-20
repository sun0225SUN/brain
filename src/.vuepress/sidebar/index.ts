import { web } from "./group/web";
import { dv } from "./group/dv";
import { ai } from "./group/ai";
import { en } from "./group/en";
import { life } from "./group/life";

import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/web/": web,
  "/dv/": dv,
  "/ai/": ai,
  "/en/": en,
  "/life/": life,
});
