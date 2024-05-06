<script setup lang='ts'>
import { mapProps } from '@formily/vue';
import { FUND_DIMENSION } from '~/constants'
interface Props {
  prop: string
  label: string
  type?: string
  format?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'string',
  format: '',
})
const slots = useSlots()
const formatValue = (v) => {
  if (props.format === 'fundDimension') {
    return FUND_DIMENSION[v] || v
  }
  if (props.format === 'datetime') {
    return dayjs(v).format('YYYY-MM-DD HH:mm:ss')
  }
  if (props.format === 'money') {
    return `${v}元`
  }
  if (props.format === 'percent') {
    return `${v}%`
  }
  return v
}
</script>

<template>
  <ElTableColumn
    :prop="prop"
    :label="label"
  >
    <template #default="scope">
      <template v-if="type === 'image'">
        <ImagePreview :src="scope.row[prop]" />
      </template>
      <template v-else-if="type === 'boolean'">
        <ElSwitch :model-value="formatValue(scope.row[prop])" disabled/>
      </template>
      <template v-else>
        {{ formatValue(scope.row[prop]) }}
      </template>
    </template>
  </ElTableColumn>
</template>

<style lang='less' scoped>

</style>
