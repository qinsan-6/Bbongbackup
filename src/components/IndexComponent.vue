<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="4"><img src="@/assets/vue.svg" alt=""></el-col>
                    <el-col :span="16"><span>后台管理系统</span></el-col>
                    <el-col :span="4"><el-icon size="30" @click="tologin"><House /></el-icon></el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        router
                    >
                    <template v-for="item in menuRouterDate">
                        <el-menu-item :index=item.index>{{item.introduced}}</el-menu-item>
                    </template>
                    </el-menu>
                </el-aside>
                <el-main>
                   <router-view></router-view>
                </el-main>
             </el-container>
         </el-container>
    </div>        
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type {MenuRouterDate} from './type'
const router = useRouter();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 列表初始数据
const menuRouterDate:MenuRouterDate[]=[
    {
        index: "/about",
        introduced: "商品详情",
    },
    {
        index: "/image",
        introduced: "商品图片",
    },
    {
        index: "/evaluate",
        introduced: "买家评估",
    },
]

const tologin=()=>{
    router.push('/login')
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color: cadetblue;
    text-align: center;
    .el-row{
        margin-top: 15px;
    }
}
.el-menu {
    height: calc(100vh - 60px);
}
</style>