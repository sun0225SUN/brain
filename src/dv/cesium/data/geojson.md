---
title: GeoJson
icon: post
order: 2
author: 小孙同学
date: 2023-08-07
category:
  - Cesium
  - 数据可视化
tag:
  - GeoJson
---

![](https://files.sunguoqi.com/brain-images/202308101521437.png)

## GeoJSON

GeoJSON 是一种对各种地理数据结构进行编码的格式，是基于 JavaScript 对象表示法（JavaScript Object Notation，JSON）的地理空间信息数据交换格式。

GeoJSON 对象可以表示几何特征或特征集合，并且支持点、线、面、多点、多线、多面和几何集合等几何类型。

Cesium 针对 JSON 数据源提供了 GeoJsonDataSource 类，可以通过 load 方法加载 GeoJSON 对象并设置相应的填充颜色、边框颜色、边框宽度、是否贴地等属性。

## 代码示例

```vue
<script setup>
import { onMounted } from "vue";

async function init() {
  const viewer = new Cesium.Viewer(cesiumContainer, { infoBox: false });
  let res = await Cesium.GeoJsonDataSource.load(
    "./data/geojson/guangzhou.json",
    {
      stroke: Cesium.Color.WHITE,
      fill: Cesium.Color.BLUE.withAlpha(0.3), //注意：颜色必须大写
      strokeWidth: 5,
    }
  );
  viewer.dataSources.add(res);
  viewer.zoomTo(res);
}

onMounted(() => {
  init();
});
</script>

<template>
  <div id="cesiumContainer" style="width: 100%; height: 100vh;"></div>
</template>

<style scoped></style>
```

## 参考资料

- Cesium 中加载 Geojson：https://blog.csdn.net/qq_40323256/article/details/108476202
