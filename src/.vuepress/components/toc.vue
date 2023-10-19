<template>
  <TOC>
    <template #after>
      <a href="https://box.sunguoqi.com/weixin_mp">
        <div id="flip-wrapper">
          <div id="flip-content">
            <div class="face"></div>
            <div class="back face"></div>
          </div>
        </div>
      </a>
    </template>
  </TOC>
</template>

<script setup>
import TOC from "vuepress-theme-hope/modules/info/components/TOC.js";
</script>

<style lang="scss" scoped>
#flip-wrapper {
  position: relative;
  width: 250px;
  height: 70px;
  z-index: 1;
  margin-top: 30px;
}

#flip-wrapper {
  -webkit-perspective: 1000;
  perspective: 1000;
}

#flip-content {
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: cubic-bezier(0, 0, 0, 1.29) 0.5s;
}

#flip-wrapper:hover #flip-content {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: url(https://blog.sunguoqi.com/upload/wx1.png) center center
    no-repeat;
  background-size: 100%;
  border-radius: 5px;
}

.back.face {
  display: block;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  box-sizing: border-box;
  background: url(https://blog.sunguoqi.com/upload/wx2.png) center center
    no-repeat;
  background-size: 100%;
}
</style>
