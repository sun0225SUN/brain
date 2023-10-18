<template>
  <TOC>
    <template #after>
      <img
        class="wp"
        src="https://blog.sunguoqi.com/upload/wx1.png"
        alt="微信公众号"
      />
    </template>
  </TOC>
</template>

<script setup>
import TOC from "vuepress-theme-hope/modules/info/components/TOC.js";
</script>

<style lang="scss" scoped>
.wp {
  width: 250px;
  margin-top: 20px;
  border-radius: 5px;
}
</style>
