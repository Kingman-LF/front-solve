<template>
  <div class="content">
    <div class="Dtitle">
      “破五多”综合治理平台
    </div>
    <div class="boxs">
<!--      <el-row :gutter="12">-->
<!--        <el-col :span="8">-->
          <assign></assign>
<!--        </el-col>-->
<!--        <el-col :span="8">-->
          <fenbu />
<!--        </el-col>-->
<!--        <el-col :span="8">-->
          <task></task>
<!--        </el-col>-->
<!--      </el-row>-->
    </div>

  </div>
</template>

<script>
// 小模块
import fenbu from "@/components/shouye/fenbu";
import assign from '@/components/shouye/assign';
import task from '@/components/shouye/task'

import btsgs from "@/components/shouye/btsgs";
import cftsv from "@/components/shouye/cftsv";
import bjv from "@/components/shouye/bjv";
import yqqs from "@/components/shouye/yqqs";
import yqzt from "@/components/shouye/yqzt";
import zdjg from "@/components/shouye/zdjg";
import tzsb from "@/components/shouye/tzsb";
import scbhg from "@/components/shouye/scbhg";
import spcjbhg from "@/components/shouye/spcjbhg";
import dtjcbhg from "@/components/shouye/dtjcbhg";
import jbwt from "@/components/shouye/jbwt";
import jacontent from "@/components/shouye/jacontent";
export default {
  name: "index",
  components: {
    assign,//一键交办
    fenbu, //地图分布,
    task,//任务列表

    btsgs, //被投诉公司排行TOP10
    cftsv, //仪表盘
    bjv, //办结率
    yqqs, //舆情趋势
    yqzt,
    zdjg,
    tzsb,
    scbhg,
    spcjbhg,
    dtjcbhg,
    jbwt,
    jacontent
  },
}
</script>

<style lang="scss" scoped>
  .boxs{
    display: flex;
  }
</style>
