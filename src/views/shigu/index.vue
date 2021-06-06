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
            <gzl></gzl>
          </el-col>
          <el-col :span="12">
            <wygs></wygs>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="15">
            <pjgzl></pjgzl>
          </el-col>
          <el-col :span="9">
            <krsg></krsg>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="24">
            <tsdjd></tsdjd>
          </el-col>
          <!-- <el-col :span="12">
            <clfh></clfh>
          </el-col> -->
        </el-row>
        <!-- <el-row :gutter="12">
          <el-col :span="12">
            <wb></wb>
          </el-col>
          <el-col :span="12">
            <yxq></yxq>
          </el-col>
        </el-row> -->
        <!-- <el-row :gutter="12">
          <el-col :span="12">
            <dtgz></dtgz>
          </el-col>
          <el-col :span="12">
            <bhg></bhg>
          </el-col>
        </el-row> -->
      </el-col>
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="12">
            <bts></bts>
          </el-col>
          <el-col :span="12">
            <sjwh></sjwh>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <gzlx></gzlx>
          </el-col>
          <el-col :span="12">
            <jyjc></jyjc>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="24">
            <history></history>
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
import dtgz from "@/components/shigu/dtgz";
import history from "@/components/shigu/history";
import jyjc from "@/components/shigu/jyjc";
import gzlx from "@/components/shigu/gzlx";
import sjwh from "@/components/shigu/sjwh";
import bts from "@/components/shigu/bts";
import bhg from "@/components/shigu/bhg";
import tsdjd from "@/components/shigu/tsdjd"
import clfh from "@/components/shigu/clfh"
import wb from "@/components/shigu/wb"
import yxq from "@/components/shigu/yxq"
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
    dtgz,
    history,
    jyjc,
    gzlx,
    sjwh,
    bts,
    bhg,

    tsdjd,
    clfh,
    wb,
    yxq
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
