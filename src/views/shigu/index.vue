<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">
      “破五多”综合治理平台
    </div>
    <div class="Etitle">
      <p>事故防控</p>
    </div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="12">
            <!-- 风险单位地区分布 -->
            <gzl></gzl>
          </el-col>
          <el-col :span="12">
            <!-- 预警设备地区分布 -->
            <wygs></wygs>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="16">
            <!-- 风险单位 -->
            <pjgzl></pjgzl>
          </el-col>
          <el-col :span="8">
            <!-- 检查统计 -->
            <krsg></krsg>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="24">
            <!-- 故障量分布 -->
            <tsdjd></tsdjd>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="24">
            <!-- 设备类别预警个数 -->
            <bts></bts>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="8">
            <!-- 电梯概览 -->
            <gzlx></gzlx>
          </el-col>
          <el-col :span="16">
            <!-- 本月扫码 -->
            <jyjc></jyjc>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import gzl from "@/components/shigu/gzl";
import wygs from "@/components/shigu/wygs";
import pjgzl from "@/components/shigu/pjgzl";
import krsg from "@/components/shigu/krsg";
// import dtgz from "@/components/shigu/dtgz";
import history from "@/components/shigu/history";
import jyjc from "@/components/shigu/jyjc";
import gzlx from "@/components/shigu/gzlx";
import sjwh from "@/components/shigu/sjwh";
import bts from "@/components/shigu/bts";
// import bhg from "@/components/shigu/bhg";
import tsdjd from "@/components/shigu/tsdjd"
// import clfh from "@/components/shigu/clfh"
// import wb from "@/components/shigu/wb"
// import yxq from "@/components/shigu/yxq"
export default {
  name: "home",
  data() {
    return {
      map: null,
      heatmap: null,
      text1: "2021-5-21\n14:44:00",
      text2: "流转还剩4天\n办理还剩8天",
    };
  },
  components: {
    gzl,
    wygs,
    pjgzl,
    krsg,
    // dtgz,
    history,
    jyjc,
    gzlx,
    sjwh,
    bts,
    // bhg,

    tsdjd,
    // clfh,
    // wb,
    // yxq
  },
  methods: {
    toHome(){
      console.log(123)
      this.$router.replace("/home")
    }
  },
};
</script>
<style lang="scss" scoped>
.content{
  width: 320rem;
  height: 90rem;
  background-image: url("~@/assets/images/bg4.gif");
  background-size: cover;
  position: relative;
  
}
</style>
