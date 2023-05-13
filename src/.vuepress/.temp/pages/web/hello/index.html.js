export const data = JSON.parse("{\"key\":\"v-0eebc071\",\"path\":\"/web/hello/\",\"title\":\"Features Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Features Demo\",\"index\":false,\"icon\":\"discover\",\"category\":[\"Guide\"],\"description\":\"Catalog Markdown Enhance (markdown.md); Page Config (page.md); Function Disable (disable.md); Encryption Demo (encrypt.md);\"},\"headers\":[{\"level\":2,\"title\":\"Catalog\",\"slug\":\"catalog\",\"link\":\"#catalog\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"web/hello/README.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
