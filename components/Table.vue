<script setup lang='tsx'>
import { ElButton } from 'element-plus'
export type RowData = any
interface nextFn {
  (): Promise<void>
}
export interface Props {
  /** 表格标题 */
  header?: string
  // 表格数据CURD相关
  /** 是否初始化时自动获取数据 */
  autoFetch?: boolean
  refreshPage?: boolean
  refreshTable?: boolean
  tableDataFetch?: (next: (list: RowData[]) => Promise<void>, pager: Pager, list: RowData[]) => Promise<void>
  rowDelete?: (next: nextFn, row: RowData, list: RowData[]) => Promise<void>
  rowUpdate?: (next: nextFn, row: RowData, list: RowData[]) => Promise<void>
  rowCreate?: (next: nextFn, list: RowData[]) => Promise<void>
}
export interface Pager {
  pageSize: number
  pageNum: number
}
export interface Emits {
  (e: 'rowDelete', row: RowData, list: RowData[], callback: () => Promise<void>): void
}
const props = withDefaults(defineProps<Props>(), {
  header: '列表',
  autoFetch: true,
  refreshPage: true,
  tableDataFetch: async (next, pager, list) => {
    next([])
  },
  rowDelete: async (next, row, list) => {next()},
  rowUpdate: async (next, row, list) => {next()},
  rowCreate: async (next, list) => {next()}
})
const tableData = ref<RowData[]>([])
const pager = ref<Pager>({
  pageSize: 10,
  pageNum: 1,
})
// 刷新表格数据并回到首页
async function refreshTableData() {
  pager.value.pageNum = 1
  await fetchTableData()
}
// 获取当前页表格数据
const dataFetching = ref(false)
async function fetchTableData() {
  dataFetching.value = true
  if (isFn(props.tableDataFetch)) {
    props.tableDataFetch((list: RowData[]) => {
      tableData.value = list
      dataFetching.value = false
    }, pager.value, tableData.value)
  }
}
const deleting = ref(false)
async function _rowDelte(row: RowData) {
  deleting.value = true
  if (isFn(props.rowDelete)) {
    await props.rowDelete!(async () => {
      deleting.value = false
      await fetchTableData()
      ElMessage.success('操作成功')
    }, row, tableData.value)
  } else {
    deleting.value = false
  }
}
const updating = ref(false)
async function _rowUpdate(row: RowData) {
  if (isFn(props.rowUpdate)) {
    props.rowUpdate!(async () => {
      await fetchTableData()
      ElMessage.success('操作成功')
    }, row, tableData.value)
  }
}
async function _rowCreate() {
  props.rowCreate!(async () => {
    await fetchTableData()
    ElMessage.success('操作成功')
  }, tableData.value)
}

props.autoFetch && fetchTableData()
</script>

<template>
  <!-- 按钮 -->
  <div class="mb-4 flex items-center justify-between">
    <div>
      <h2>{{ header }}</h2>
      <slot name="tlp" />
      <slot name="tl" />
    </div>
    <div>
      <slot name="tc" />
    </div>
    <div>
      <slot name="tr" />
      <el-button type="primary" @click="_rowCreate()">
        新增
      </el-button>
      <el-button v-if="refreshTable" type="primary" @click="refreshTableData">
        刷新表格
      </el-button>
      <el-button v-if="refreshPage" type="primary" @click="fetchTableData">
        刷新
      </el-button>
    </div>
    <slot name="tb" />
  </div>
  <ElTable v-loading="dataFetching" :data="tableData" border element-loading-background="rgba(122, 122, 122, 0.8)">
    <slot :data="tableData" />
    <ElTableColumn label="操作" width="180">
      <template #default="scope">
        <ElButton :loading="updating" size="small" @click="_rowUpdate(scope.row)">
          编辑
        </ElButton>
        <el-popconfirm title="确认删除?" @confirm="_rowDelte(scope.row)">
          <template #reference>
            <ElButton :loading="deleting" size="small" type="danger">
              删除
            </ElButton>
          </template>
        </el-popconfirm>

        <!-- 可以根据需要添加更多操作按钮 -->
      </template>
    </ElTableColumn>
  </ElTable>

  <div class="mt-4 flex items-center justify-between">
    <div>
      <slot name="bl" />
    </div>
    <div>
      <slot name="bc" />
    </div>
    <div>
      <slot name="br" />
    </div>
  </div>
</template>

<style lang='less' scoped></style>
