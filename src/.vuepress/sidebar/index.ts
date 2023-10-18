import { fe } from "./group/fe";
import { be } from "./group/be";
import { dv } from "./group/dv";
import { ai } from "./group/ai";
import { en } from "./group/en";
import { life } from "./group/life";

// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/web/frontend/": fe,
  "/web/backend/": be,
  "/dv/": dv,
  "/ai/": ai,
  "/en/": en,
  "/life/": life,
});
