---
title: Hello Cesium
icon: post
order: 1
author: 小孙同学
date: 2023-08-03
category:
  - Cesium
  - 数据可视化
tag:
  - 三维
  - GIS
  - 快速上手
---

![](https://files.sunguoqi.com/brain-images/202308031603172.png)

## 一、使用 Vite 搭建项目框架

打开终端，输入下面这行命令创建一个 Vite 项目。

```bash
npm create vite@latest
```

根据提示，填写项目名称，框架选择 Vue，语言选择 JavaScript。

进入项目路径，输入`npm install` 安装依赖，输入`npm run dev`启动调试。

![](https://files.sunguoqi.com/brain-images/202308031518872.png)

## 二、在 Vue 中使用 Cesium 的三种方法

### 1、引入 Cesium 源码

[点击链接](https://cesium.com/downloads/)下载 Cesium 的最新源码, 复制`Build\Cesium`里的所有文件到 Public 目录下，修改以下文件代码即可。

::: code-tabs#shell

@tab:active index.html

```html
<!-- src/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="stylesheet" href="./Cesium/Widgets/widgets.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
    <script src="./Cesium/Cesium.js"></script>
  </body>
</html>
```

@tab style.css

```css
/* src/style.css */
* {
  margin: 0;
  padding: 0;
}
```

@tab App.vue

```vue
<!-- src/App.vue -->
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false,
  });
});
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100vh;
}
</style>
```

:::

![](https://files.sunguoqi.com/brain-images/202308031549743.png)

### 2、使用 vite-plugin-cesium 插件

插件地址：https://github.com/nshen/vite-plugin-cesium

打开终端，输入以下命令安装插件：

```bash
npm i cesium vite-plugin-cesium vite -D
```

修改文件内容如下即可，启动调试即可。

::: code-tabs#shell

@tab:active vite.config.js

```js
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cesium()],
});
```

@tab style.css

```css
/* src/style.css */
* {
  margin: 0;
  padding: 0;
}
```

@tab App.vue

```vue
<!-- src/App.vue -->
<script setup>
import * as Cesium from "cesium";
import { onMounted } from "vue";

onMounted(() => {
  const viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false,
  });
});
</script>

<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100vh;
}
</style>
```

:::

![](https://files.sunguoqi.com/brain-images/202308031832119.png)

### 3、使用 vue-cesium 第三方组件库

组件库地址：https://github.com/zouyaoji/vue-cesium

打开终端，输入以下命令安装组件库：

```bash
npm i cesium vite-plugin-cesium vite -D
```

修改文件内容如下即可，启动调试即可。

::: code-tabs#shell

@tab:active main.js

```js
// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import VueCesium from "vue-cesium";
import "vue-cesium/dist/index.css";

const app = createApp(App);

app.use(VueCesium);

app.mount("#app");
```

@tab App.vue

```vue
<!-- src/App.vue -->
<script></script>

<template>
  <div class="main-container">
    <vc-viewer :showCredit="false">
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>

<style>
.main-container {
  width: 100%;
  height: 100vh;
}
</style>
```

:::

![](https://files.sunguoqi.com/brain-images/202308031842390.png)

## 三、界面介绍

todo
