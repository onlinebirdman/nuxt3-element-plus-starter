<script setup lang='ts'>
const headerRef = ref()
const sideRef = ref()
const bodyRef = ref()
const { width: headerWith, height: headerHeight } = useElementSize(headerRef)
const { width: sideWith, height: sideHeight } = useElementSize(sideRef)

const headerHeightPx = computed(() => `${headerHeight.value}px`)
const sideWidthPx = computed(() => `${sideWith.value}px`)
</script>

<template>
  <div class="default-layout">
    <!-- 顶部栏 -->
    <div ref="headerRef" class="default-layout--header">
      <slot name="header" />
    </div>
    <div ref="sideRef" class="default-layout--side">
      <slot name="side" />
    </div>
    <div ref="bodyRef" class="default-layout--body">
      <slot />
    </div>
  </div>
</template>

<style lang='less' scoped>
.default-layout {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
}
.default-layout--header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.default-layout--side {
  position: fixed;
  top: v-bind(headerHeightPx);
  left: 0;
  bottom: 0;
}
.default-layout--body {
  position: fixed;
  top: v-bind(headerHeightPx);
  left: v-bind(sideWidthPx);
  bottom: 0;
  right: 0;
}
</style>
