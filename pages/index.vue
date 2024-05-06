<script setup lang='ts'>
const routes = useRouter().getRoutes()
routes.filter(route => route.name!.toString().startsWith('index-'))
const menus = routes.filter(route => route.name!.toString().startsWith('index-'))
console.log('menus', menus)
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      <LayoutHeaderBar />
    </template>
    <template #side>
      <LayoutAsideMenu :menus="menus" />
    </template>
    <template #default>
      <NuxtPage />
    </template>
  </NuxtLayout>
</template>

<style lang='less' scoped>

</style>
