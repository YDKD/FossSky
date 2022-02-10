<template>
  <div class="account-login mt-3 text-sm">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="left"
      class="demo-ruleForm"
    >
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="用户名/邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" placeholder="密码"></el-input>
      </el-form-item>
    </el-form>
    <div class="login-middle flex justify-between items-center my-3">
      <el-checkbox
        v-model="checked"
        label="下次自动登录"
        class="text-sm"
      ></el-checkbox>
      <span class="jump">忘记密码</span>
    </div>
    <el-button
      class="w-full login-btn tracking-widest !bg-orange-500"
      @click="login"
      >登录</el-button
    >
    <div class="my-3">
      还没有账号?<span class="pl-2 jump" @click="startRegister">马上注册</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineEmits } from 'vue'
import type { ElForm } from 'element-plus'

type FormInstance = InstanceType<typeof ElForm>

// 自动登录checked
let checked = ref(false)
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  name: '',
  password: ''
})

const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 5,
      message: '用户名长度为3-5',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})

// login
const login = () => {}

const emmits = defineEmits(['register'])

const startRegister = () => {
  emmits('register', true)
}
</script>

<style scoped lang="less">
.account-login {
  font-size: 12px;
  .login-btn {
    // --tw-border-opacity: 1;
    // background-color: rgb(249 115 22 / var(--tw-border-opacity));
    color: #fff;
  }
}
</style>
