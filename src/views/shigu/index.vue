<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">
      “破五多”综合治理平台
    </div>
    <div class="Etitle">
      <p>事故防控模块</p>
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
          <el-col :span="12">
            <pjgzl></pjgzl>
          </el-col>
          <el-col :span="12">
            <krsg></krsg>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="12">
            <tsdjd></tsdjd>
          </el-col>
          <el-col :span="12">
            <clfh></clfh>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <wb></wb>
          </el-col>
          <el-col :span="12">
            <yxq></yxq>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <dtgz></dtgz>
          </el-col>
          <el-col :span="12">
            <bhg></bhg>
          </el-col>
        </el-row>
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
//.box {
//  width: 320rem;
//  height: 90rem;
//  background: url("~@/assets/images/bg.gif") no-repeat center;
//  background-size: cover;
//  position: relative;
//  .boxLeft {
//    width: 176.33rem;
//    height: 8.33rem;
//    position: absolute;
//    box-sizing: border-box;
//    padding-left: 10rem;
//    box-sizing: border-box;
//    background: url("~@/assets/images/jfhjmk.png") no-repeat center;
//    background-size: cover;
//    span {
//      font-family: PingFang;
//      font-weight: bold;
//      font-style: italic;
//      color: #ffffff;
//      font-size: 4rem;
//      line-height: 6.67rem;
//      background: linear-gradient(
//        0deg,
//        rgba(255, 255, 255, 0.73) 44.7998046875%,
//        rgba(15, 94, 214, 0.4) 100%
//      );
//      -webkit-background-clip: text;
//      -webkit-text-fill-color: transparent;
//    }
//  }
//  .title {
//    font-size: 4rem;
//    font-style: italic;
//    color: #ffffff;
//    font-weight: bold;
//    text-align: center;
//    line-height: 6.67rem;
//    font-family: PingFang;
//    background: linear-gradient(
//            0deg,
//            rgba(255, 255, 255, 0.73) 44.7998046875%,
//            rgba(15, 94, 214, 0.4) 100%
//    );
//    -webkit-background-clip: text;
//    -webkit-text-fill-color: transparent;
//  }
//  .content {
//    display: flex;
//    padding: 1.25rem 4.67rem 5.58rem 4.67rem;
//    .left,
//    .mTop,
//    .mBtm {
//      display: flex;
//      width: 100.92rem;
//      height: 76.58rem;
//      position: relative;
//      flex-wrap: wrap;
//      box-sizing: border-box;
//      margin-right: 3.83rem;
//      justify-content: space-between;
//    }
//    .midLeft {
//      width: 100.76rem;
//      margin-right: 3.83rem;
//      .mTop {
//        height: 36rem;
//        margin-bottom: 3.92rem;
//        .common {
//          width: 48.42rem;
//          height: 15.92rem;
//          margin-bottom: 4rem;
//          background: url("~@/assets/images/shugu/jx1.png") no-repeat center;
//          background-size: cover;
//          .contentVal {
//            text-align: center;
//            span {
//              font-size: 6rem;
//              font-family: digifaw;
//              font-weight: 400;
//              color: #ffffff;
//              text-shadow: 0rem 0rem 0rem blue;
//            }
//          }
//        }
//      }
//      .mBtm {
//        width: 101.58rem;
//        height: 36rem;
//      }
//    }
//    .midRight {
//      .rTop {
//        width: 101.66rem;
//        height: 50rem;
//        display: flex;
//        flex-wrap: wrap;
//        margin-bottom: 3.08rem;
//        justify-content: space-between;
//        .common {
//          width: 49.33rem;
//          height: 23.5rem;
//          margin-bottom: 3rem;
//          background-image: url("~@/assets/images/shugu/jx2.png");
//          background-size: 100% 100%;
//        }
//      }
//    }
//  }
//}
//// .contentVal{
////   font-size: 6rem;
////   color: #ffffff;
////   text-align: center;
////   font-family: digifaw;
////   margin-left: -3.08rem;
//// }
//
//// .cbchart {
////   width: 44rem;
////   height: 16rem;
//// }
//// .squareChart{
////   width: 43.5rem;
////   height: 28rem;
////   margin-top: 1rem;
//// }
</style>
