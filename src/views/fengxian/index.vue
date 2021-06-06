<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">
      “破五多”综合治理平台
    </div>
    <div class="Etitle">
      <p>风险管控</p>
    </div>
    
    <el-row :gutter="12">
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="12">
            <spcj></spcj>
          </el-col>
          <el-col :span="12">
            <ggfx></ggfx>
          </el-col>
        </el-row>
        <!-- <el-row :gutter="12">
          <el-col :span="12">
            <wygs></wygs>
          </el-col>
          <el-col :span="12">
            <spzd></spzd>
          </el-col>
        </el-row> -->
      </el-col>
      <el-col :span="8">
        <numbers></numbers>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-row>
              <el-col :span="24">
                <tzsb></tzsb>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <gzl></gzl>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="24">
                <yaoshi></yaoshi>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <zdjg></zdjg>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <ypjc></ypjc>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="12">
            <scbhg></scbhg>
          </el-col>
          <el-col :span="12">
            <ajzt></ajzt>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <scqy></scqy>
          </el-col>
          <el-col :span="12">
            <ajztqk></ajztqk>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import spcj from "@/components/fengxian/spcj"
import ggfx from "@/components/fengxian/ggfx"
import wygs from "@/components/fengxian/wygs"
import spzd from "@/components/fengxian/spzd"
import tzsb from "@/components/fengxian/tzsb"
import gzl from "@/components/fengxian/gzl"
import zdjg from "@/components/fengxian/zdjg"
import ypjc from "@/components/fengxian/ypjc"
import scbhg from "@/components/fengxian/scbhg"
import ajzt from "@/components/fengxian/ajzt"
import scqy from "@/components/fengxian/scqy"
import ajztqk from "@/components/fengxian/ajztqk"
import numbers from "@/components/fengxian/numbers"
import yaoshi from "@/components/fengxian/yaoshi"
// ajztqk
import * as echarts from "echarts";
export default {
  data() {
    return {
      btnList: [
        {
          id: Math.random(),
          text: "食品监督",
        },
        {
          id: Math.random(),
          text: "药品监督",
        },
        {
          id: Math.random(),
          text: "产品监管",
        },
        {
          id: Math.random(),
          text: "广告监测",
        },
        {
          id: Math.random(),
          text: "特种设备",
        },
        {
          id: Math.random(),
          text: "综合执法",
        },
      ],
    };
  },

  components: {
    spcj,
    ggfx,
    wygs,
    spzd,
    tzsb,
    gzl,
    zdjg,
    ypjc,
    scbhg,
    ajzt,
    scqy,
    ajztqk,
    numbers,
    yaoshi
  },
  methods: {
    // 按钮
    btnC(item) {
      console.log(item)
    },
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
