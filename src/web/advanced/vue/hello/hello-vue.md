---
title: Hello Vue
icon: exercise
order: 1
---

```mindmap
root((Vue))
  What
    用户界面
    渐进式框架
    声明式
    组件化
    编程模型
  Why
  How
```

## 什么是 Vue

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面[^1]的渐进式框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套**声明式**的、**组件化**的**编程模型**，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

### 渐进式框架


#### 框架



#### 渐进式



### 声明式

::: vue-demo 666

```vue
<template>
  <button @click="alert('666')">hello world</button>
</template>
```
:::

::: vue-demo 777

```vue
<template>
  <button @click="handler">hello world</button>
</template>

<script>
export default{
  methods: {
    handler() {
      alert('777')
    }
  }
}
</script>
```
:::


### 组件化

### 编程模型

## 为什么要学习 Vue


## 快速上手

## 参考资料


[^1]: 用户界面（User Interface，简称UI，亦称使用者界面）是系统和用户之间进行交互和信息交换的媒介，它实现信息的内部形式与人类可以接受形式之间的转换。