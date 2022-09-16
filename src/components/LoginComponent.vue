<template>
    <div class="login-container">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
        >
            <el-form-item label="账号" prop="username">
              <el-input v-model="ruleForm.username" type="username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="账号密码" prop="password">
              <el-input
                  v-model="ruleForm.password"
                  type="password"
                  autocomplete="off"
              />
            </el-form-item>
            
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)"
                  >登录</el-button
              >
              <el-button @click="resetForm(ruleFormRef)">重新输入</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import {RuleForm} from './type'
const ruleFormRef = ref<FormInstance>()

// 在用户输入完成后立即进行第一次验证
const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } 
   
    callback()
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  }else{
    // 密码输入不为空
    // 检验是否为合法密码
    
  }
    callback()
}

const ruleForm = reactive(new RuleForm())

const rules = reactive({
  username: [{ validator: validateName, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
})

// 提交表单信息
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
// 重置表单信息
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style lang="scss" scoped>
    .login-container{
        width: 100%;
        height: 100%;
        background: url('../assets/background.jpg');
        display: flex;
        background-size: cover;
        align-items: center;
        justify-content:center ;
        .demo-ruleForm{
          width: 400px;
          height: 200px;
        }
    }
    
</style>