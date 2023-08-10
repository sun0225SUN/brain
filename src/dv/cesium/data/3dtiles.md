---
title: 3D Tiles
icon: post
order: 3
author: 小孙同学
date: 2023-08-07
category:
  - Cesium
  - 数据可视化
tag:
  - 数据加载
---

![](https://files.sunguoqi.com/brain-images/202308101438111.png)

## 3D Tiles 简介

3D Tiles 是 Cesium 于 2016 年 3 月定义的一种三维模型瓦片数据格式，目前已经是 OGC 标准之一，3D Tiles 将海量三维数据以分块分层的形式组织起来，大大减轻了浏览器和 GPU 的负担。

3D Tiles 专为流式传输和渲染 3D 地理数据而设计的，如倾斜摄影测量、BIM、点云、建筑数据等。特点有：

- **开放且灵活。** 3D Tiles 作为开放数据规范，其切片方案灵活可变，三维模型的切片大小和覆盖范围可以人为设置。此外，3D Tiles 还可以适配三维空间中多种空间分区方案，如四叉树、八叉树、KD 树等。

- **异质性支持。** 通过一组已定义的文件格式，将多种三维地理空间要素（如倾斜摄影测量、BIM、点云、建筑数据、实例化要素等）转换为三维形式的单个数据集，同时又允许多种不同格式标准的模型显示在同一场景中。

- **专为三维可视化设计。** 3D Tiles 建立在 gltf 格式之上，并引入了三维图形学技术，以树状的层级细节模型（HLOD）进行组织，降低海量数据可视化过程中的浏览器负担，减少 WebGL 绘制请求的数量。

- **可交互。** 3D Tiles 支持交互旋转和样式的设置。如单击高亮，修改单个模型的材质，根据属性信息设置不同的显示效果等。

## 代码示例

```vue
<template>
  <div id="cesiumContainer" style="width: 100%; height: 100vh;"></div>
</template>

<script setup>
import { onMounted } from "vue";

async function init() {
  const viewer = new Cesium.Viewer(cesiumContainer, { infoBox: false });
  const tileset = await Cesium.Cesium3DTileset.fromUrl("./data/tileset.json");
  viewer.scene.primitives.add(tileset);
  viewer.zoomTo(tileset);
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

- 3dTiles 规范仓库：https://github.com/CesiumGS/3d-tiles

- 本文数据下载地址：https://github.com/CesiumGS/3d-tiles-samples

- 3dTiles 格式介绍：https://blog.csdn.net/whl0071/article/details/126000225
