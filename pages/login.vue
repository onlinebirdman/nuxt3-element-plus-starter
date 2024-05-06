<script setup lang="ts">
import type { FormInstance } from 'element-plus'

const loginStore = useLoginStore()
/** 定义表单校验规则 */
const formRules = {
  username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
  // "password": "123",
	// "username": "admin"
}
// 登录框标题
const appConfig = useAppConfig()
/** 表单 */
const formRef = ref()
function submitForm(formRef: FormInstance) {
  formRef.validate(async (valid: boolean) => {
    if (valid)
      await loginStore.login()

    else
      return false
  })
}
</script>

<template>
  <div class="login">
    <div class="login-form-wrapper">
      <h3>{{ appConfig.title }}</h3>
      <el-form
        ref="formRef"
        :model="loginStore.form"
        :rules="formRules"
        label-width="60px"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            v-model.trim="loginStore.form.username"
            style="width: 90%"
            placeholder="请输入登录账号"
            clearable
            @keyup.enter="submitForm(formRef)"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model.trim="loginStore.form.password"
            style="width: 90%"
            type="password"
            placeholder="请输入登录密码"
            clearable
            @keyup.enter="submitForm(formRef)"
          />
        </el-form-item>

        <el-form-item label-width="0">
          <el-button
            class="login-btn"
            type="primary"
            @click="submitForm(formRef)"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="less">
  .login {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #ffffff;
  justify-content: center;
  align-items: center;
}
.login-form-wrapper {
  margin: auto;
  position: relative;
  top: -100px;
  width: 360px;
  padding: 30px;
  box-shadow: 0 0 20px 10px rgba(207, 207, 207, 0.5);
  border-radius: 10px;
  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #bfcbd9;
  }
}
.login-btn {
  width: 100%;
}
</style>
