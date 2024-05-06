<script setup lang='tsx'>
const header = ref('Table Header')
const fetchList = (next, pager) => {
  next([])
}
const onCreate = (next, list) => {
  next()
}
const onUpdate = (next, row, list) => {
  next()
}
const onDelete = (next, row, list) => {
  next()
}
</script>

<template>
  <div class="p-30">
    <Table :header="header"
        :table-data-fetch="fetchList"
        :rowCreate="onCreate"
        :rowUpdate="onUpdate"
        :rowDelete="onDelete">
      <TableColumn prop="awardName" label="奖品名称" />
      <TableColumn prop="code" label="券码" />
      <TableColumn prop="num" label="奖品数量" />
      <TableColumn prop="winRate" label="中奖概率" />
    </Table>
  </div>
</template>

<style lang='less' scoped></style>
