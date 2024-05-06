<script setup lang='ts'>
import { API } from '~/api';
definePageMeta({
  title: '数据埋点',
})
const dateRange = ref("");
const doExport = () => {
  console.log("value", dateRange.value);
  const [startDate, endDate] = dateRange.value;
  if (!startDate) return ElMessage.warning("请选择区间");
  // 导出
  API.middle.ExportByDate.request({
    beginDate: startDate,
    endDate: endDate,
  })
  
};
</script>

<template>
  <div style="padding: 30px">
    <span style="margin-right: 20px">数据区间:</span>
    <ElDatePicker v-model="dateRange" value-format="YYYYMMDD" style="margin-right: 20px" type="daterange"
      range-separator="To" start-placeholder="Start date" end-placeholder="End date" size="small" />
    <ElButton type="primary" size="small" @click="doExport">导出</ElButton>
  </div>
</template>

<style lang='less' scoped></style>
