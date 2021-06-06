<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">
      “破五多”综合治理平台
    </div>
    <div class="Etitle">
      <p>纠纷化解模块</p>
    </div>
    <el-row :gutter="12">
      <el-col :span="8">
        <qiyemap></qiyemap>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-row :gutter="12">
              <el-col :span="24">
                <xfTotal></xfTotal>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="24">
                <ja></ja>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <xfStatus></xfStatus>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="24">
            <jagl></jagl>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <xftb></xftb>
          </el-col>
          <el-col :span="12">
            <xfmd></xfmd>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="12">
          <el-col :span="12">
            <xzssfb></xzssfb>
          </el-col>
          <el-col :span="12">
            <xzfyfb></xzfyfb>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <ssgl></ssgl>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="24">
                <fyay></fyay>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <fyjg></fyjg>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import qiyemap from "@/components/jiufen/gjian"
import xfTotal from "@/components/jiufen/xfTotal"
import ja from "@/components/jiufen/ja"
import xfStatus from "@/components/jiufen/xfStatus"
import jagl from "@/components/jiufen/xfgl"
import xftb from "@/components/jiufen/xftb"
import xfmd from "@/components/jiufen/xfmd"
import xzssfb from "@/components/jiufen/xzssfb"
import xzfyfb from "@/components/jiufen/xzfyfb"
import ssgl from  "@/components/jiufen/ssgl"
import fyay from "@/components/jiufen/fyay"
import fyjg from "@/components/jiufen/fyjg"

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
  methods: {
    isSupportCanvas() {
      var elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    },
    toHome(){
      console.log(123)
      this.$router.replace("/home")
    }
  },
  mounted() {

  },
  components:{
    qiyemap,
    xfTotal,
    ja,
    xfStatus,
    jagl,
    xftb,
    xfmd,
    xzssfb,
    xzfyfb,
    ssgl,
    fyay,
    fyjg
  }
};
</script>
<style lang="scss" scoped>

</style>
