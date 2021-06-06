<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">
      “破五多”综合治理平台
    </div>
    <div class="Etitle">
      <p>投诉调处</p>
    </div>
    <el-row :gutter="12">
      <el-col span="4">
        <commodity></commodity>
      </el-col>
      <el-col span="4">
        <service1></service1>
      </el-col>
      <el-col span="8">
        <tongbi></tongbi>
      </el-col>
      <el-col span="8">
        <lv></lv>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col span="4">
        <tousuleibie></tousuleibie>
      </el-col>
      <el-col span="4">
        <jubaoleibie></jubaoleibie>
      </el-col>
      <el-col span="8">
        <tousu></tousu>
      </el-col>
      <el-col span="8">
        <anjian></anjian>
      </el-col>
    </el-row>
  </div>

</template>
<script>
import * as echarts from "echarts";
import { getBarJiaoNang,meigui, duidieArea, zhuzhuangtu, yibiaoppan } from "@/utils/getCharts.js";

//商品类别投诉统计
import commodity from "@/components/tousu/commodity.vue"
//服务类别投诉统计
import service1 from "@/components/tousu/service.vue"
//投诉问题类别统计
import tousuleibie from "@/components/tousu/tousuleibie.vue"
//举报问题类别统计
import jubaoleibie from "@/components/tousu/jubaoleibie.vue"
// 同比
import tongbi from "@/components/tousu/tongbi"
// 投诉各种率
import lv from "@/components/tousu/lv"
// 案件
import anjian from "@/components/tousu/anjian"
// 投诉
import tousu from "@/components/tousu/tousu"
export default {
  data() {
    return {};
  },
  methods: {
    toHome(){
      console.log(123)
      this.$router.replace("/home")
    }
  },
  components:{
    commodity,
    service1,
    tousuleibie,
    jubaoleibie,
    tongbi,
    lv,
    anjian,
    tousu
  }
};
</script>
<style lang="scss">

</style>
