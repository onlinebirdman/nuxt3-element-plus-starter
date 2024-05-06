<script setup lang='ts'>
interface Props {
  value: any
  format: string
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  format: '',
})
const dimensionList = {
  j1z: '近1周',
  j1y: '近1月',
  j3y: '近3月',
  j6y: '近6月',
  j1n: '近1年',
  j2n: '近2年',
  j3n: '近3年',
  j5n: '近5年',
  jnl: '今年以来',
  cll: '成立以来',
  zf: '日涨跌幅',
  qrnh: '七日年化',
}
const fundDimensions = computed(() => {
  return Object.entries(dimensionList).map((item) => {
    const [value, label] = item
    return {
      label,
      value,
    }
  })
})
const displayOptions = computed(() => {
  if (props.format === 'fundDimensions') {
    return fundDimensions.value
  }
  else if (props.format === 'taskType') {
    // （SEE 浏览 ADD 加自选 FOLLOW 关注）
    return [
      { label: '跳转任务', value: 'SEE' },
      { label: '加自选', value: 'ADD' },
      { label: '关注南方幸福号', value: 'FOLLOW' },
    ]
  }
  else if (props.format === 'pushType') {
    // 推送逻辑（TOTAL:累计收益 DAY:单日涨跌幅）
    return [
      { label: '累计涨跌幅', value: 'TOTAL' },
      { label: '单日涨跌幅', value: 'DAY' },
    ]
  }
  else if (props.format === 'dayNum') {
    return [
      { label: '第一天', value: 1 },
      { label: '第二天', value: 2 },
      { label: '第三天', value: 3 },
      { label: '第四天', value: 4 },
      { label: '第五天', value: 5 },
    ]
  }
  else if (props.format === 'awardType') {
    // 奖品类型 （ALIPAY：支付宝红包 TRYGOLD：体验金）
    return [
      { label: '支付宝红包', value: 'ALIPAY' },
      { label: '体验金', value: 'TRYGOLD' },
      { label: '微信立减金', value: 'WEIXIN' },
    ]
  }
  else {
    return [
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
    ]
  }
})
</script>

<template>
  <ElSelect :model-value="value">
    <template v-for="option in displayOptions" :key="option.label">
      <ElOption :label="option.label" :value="option.value" />
    </template>
  </ElSelect>
</template>

<style lang='less' scoped>

</style>
