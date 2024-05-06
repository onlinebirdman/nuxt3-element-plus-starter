<script setup lang='ts'>
const loginStore = useLoginStore()
const appConfig = useAppConfig()
</script>

<template>
  <div class="home-header">
    <div class="left_box company">
      {{ appConfig.title }}
    </div>
    <div class="right_box">
      <el-button
        type="danger"
        size="small"
        class="sign_out"
        @click="loginStore.logout()"
      >
        注销
      </el-button>
    </div>
  </div>
</template>

<style lang='less' scoped>
.home-header {
  background-color: rgba(64, 158, 255, 1);
  line-height: 60px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 999;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  .company {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  .user {
    color: #fff;
    font-size: 18px;
    margin-right: 10px;
  }
}
</style>
