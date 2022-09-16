<template>
  <div>
    <div id="main" class="container">

    </div>
  </div>
    
</template>

<script setup lang="ts">
import {useLineChart} from "../../hooks/lineChart"

useLineChart()
</script>

<style scoped>
.container{
  width: 500px;
  height: calc(100vh - 70px);
}
</style>