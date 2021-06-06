<template>
  <div id="app">
    <!-- <div id="echarts" style="width: 520px;height: 460px;background-color: #041128"></div> -->
    <!-- <div id="echarts1" style="width: 1040px;height: 400px;background-color: #041128"></div> -->
   <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
// 引入全局文件
@import url("~@/assets/common/common.scss");
</style>
