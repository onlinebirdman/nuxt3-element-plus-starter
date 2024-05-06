<script setup lang="ts">
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
defineProps<{
  menus: RouteRecordNormalized[]
}>()

function getRouteTitle(route: RouteRecordNormalized | RouteRecordRaw) {
  return route.meta?.title || route.name
}
</script>

<template>
  <el-menu id="my_menu" :default-active="$route.path" :router="true">
    <!-- 第一层循环遍历项目 -->
    <template v-for="(menu, index) in menus" :key="menu.path">
      <el-menu-item
          
          class="tab-level_1"
          :index="menu.path"
        >
          <template #title>
            <i class="el-icon-menu" />
            <span>{{ getRouteTitle(menu) }}</span>
          </template>
        </el-menu-item>
    </template>
  </el-menu>
</template>

<style lang="less">
#my_menu {
  width: 100%;
  height: 100%;
}
</style>
