<template>
   <el-descriptions
    direction="horizontal"
    :column="1"
    :size="size"
    border
  >
  <template v-for="item in showdata.date">
    <el-descriptions-item :label="item.name">{{item.price}}</el-descriptions-item>
  </template>
    
 

  </el-descriptions>

  <el-pagination
    :page-size="6"
    :pager-count="9"
    layout="prev, pager, next"
    :total="listData.total"
    @update:current-page="pageJump"
    
  />
</template>

<script setup lang="ts">
// import GetCommoditData from '@/axios/request'  
import { ref ,reactive} from 'vue'
type ListData = {
  name:string,
  price:number,
}
class List{
  date:ListData[] = [
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },

  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  {
    name:'测试数据',
    price:666,
  },
  ];
  total:number = this.date.length;
}
// 原始数据
const listData:List =reactive( new List())

// 发送请求获取数据

// 初始显示数据
let showdata:List = reactive({
    date:listData.date.slice(0,7),
    total:listData.total
})

const pageNumber:number = 1

// 点击更新显示数据
const pageJump = (date:number)=>{
  return showdata.date = listData.date.slice((date-1)*7,date*7-1)
}
const size = ref('')
// const blockMargin = computed(() => {
//   const marginMap = {
//     large: '32px',
//     default: '28px',
//     small: '24px',
//   }
//   return {
//     marginTop:  marginMap.default,
//   }
// })

</script>

<style lang="scss" scoped>
.el-descriptions{
  height: calc(100vh - 110px);
}
</style>