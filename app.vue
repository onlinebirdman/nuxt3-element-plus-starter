<script setup lang="ts">
import 'virtual:uno.css'
// 全量引入element-plus样式
// import 'element-plus/theme-chalk/src/base.scss'

import 'element-plus/dist/index.css'
</script>

<template>
  <NuxtPage />
</template>

<style lang="less">
html,
body {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
}
</style>
