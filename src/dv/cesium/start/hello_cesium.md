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
  const viewer = new Cesium.Viewer("cesiumContainer");
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
  const viewer = new Cesium.Viewer("cesiumContainer");
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

Viewer 是一个带有多种功能的可交互的三维数字地球容器。

三维地球场景支持采用鼠标（桌面端）和手指触摸（移动端）的方式进行交互，并默认支持以下几种相机漫游方式。

• 按住鼠标左键拖曳：拖动相机在三维地球平面平移。

• 按住鼠标右键拖曳：缩放相机。

• 使用鼠标滚轮（即鼠标中键）滑动：缩放相机。

• 按住鼠标滚轮拖曳：根据当前地球的屏幕中点，旋转相机。

![](https://files.sunguoqi.com/brain-images/202308071432080.png)

- Geocoder 是位置查找工具

  使用该控件可以输入要查找的地址，查找成功后，相机会跳转并对准找到的结果

- HomeButton 是首页位置工具

  单击该控件后，会将相机跳转到默认全球视角，也可以通过代码修改跳转位置

- SceneModePicker 是视角模式切换工具

  使用该控件可以设置视角模式为 3D、2D 及哥伦布视图（CV）

- BaseLayerPicker 是默认图层选择工具

  用于选择要显示的地图服务和地形服务

- NavigationHelpButton 是导航帮助工具

  用于显示默认的地图控制和帮助选项

- Animation 是动画工具

  用于控制视图动画的播放速度

- TimeLine 是时间轴工具

  用于指示当前时间，并且允许用户跳转到指定时间

- FullscreenButton 是全屏按钮工具

  单击该控件，可以进入全屏模式，再次单击该控件，即可退出全屏模式

以上控件，在初始化 Viewer 时，将配置项设置为 false 即可隐藏

```js
new Cesium.Viewer("cesiumContainer", {
  geocoder: false, // 是否显示位置查找工具
  homeButton: false, // 是否显示首页位置工具
  sceneModePicker: false, // 是否显示视角模式切换工具
  baseLayerPicker: false, // 是否显示默认图层选择工具
  navigationHelpButton: false, // 是否显示导航帮助工具
  animation: false, // 是否显示动画工具
  timeline: false, // 是否显示时间轴工具
  fullscreenButton: true, // 是否显示全屏按钮工具
});
```
