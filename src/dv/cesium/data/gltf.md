---
title: glTF
icon: post
order: 4
author: 小孙同学
date: 2023-08-07
category:
  - Cesium
  - 数据可视化
tag:
  - glTF
  - 数据加载
---

![](https://files.sunguoqi.com/brain-images/202308101612100.png)

## glTF

glTF（GL Transmission Format），即图形语言交换格式，是一种 3D 内容的格式标准，其本质是一个 JSON 文件。该文件描述了整个 3D 场景的内容，包含了对场景结构进行描述的场景图。场景中的 3D 对象通过场景节点引用网格进行定义[1]。材质定义了 3D 对象的外观，动画定义了 3D 对象的变换操作（如选择、平移操作）。

Cesium 通过 Model.fromGltf 接口指定 glTF 数据 URL 来进行 glTF 数据加载，并且可以通过 modelMatrix、scale 等配置项调整 glTF 数据的加载位置、缩放比例等。

## 代码示例

```vue
<script setup>
import { onMounted } from "vue";

async function init() {
  const viewer = new Cesium.Viewer("cesiumContainer", {
    projectionPicker: true,
  });

  viewer.projectionPicker.viewModel.switchToOrthographic();

  const position = Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706, 0.0);
  const hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(135), 0.0, 0.0);
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    hpr
  );

  const entity = viewer.entities.add({
    position: position,
    orientation: orientation,
    model: {
      uri: "./data/gltf/CesiumMilkTruck.glb",
      minimumPixelSize: 128,
      maximumScale: 20000,
    },
  });
  viewer.trackedEntity = entity;
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

- https://sandcastle.cesium.com/?src=Projection.html&label=All
