<template>
    <div class="content">
      <div class="Dtitle" @click="toHome">“破五多”综合治理平台</div>
      <div class="Etitle">
        <p>舆情监测</p>
      </div>

      <el-row :gutter="12">
        <el-col :span="9">
          <el-row :gutter="12">
            <!--  舆情类别-->
            <el-col :span="16">
                <leibie></leibie>
            </el-col>
            <!--  舆情检测数-->
            <el-col :span="8">
              <jcs></jcs>
            </el-col>
          </el-row>
        </el-col>
        <!--负面舆情走势-->
        <el-col :span="6">
          <el-row :gutter="16">
            <el-col :span="24">
              <yqxqfb></yqxqfb>
            </el-col>
          </el-row>
        </el-col>
        <!--重点舆情专题-->
        <el-col :span="9">
          <el-row :gutter="12">
            <el-col :span="24">
              <zdqyzt></zdqyzt>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="9">
          <el-row :gutter="12">
            <!--  舆情区县分布-->
            <el-col :span="16">
              <xqfb></xqfb>
            </el-col>
            <!--  预警舆情-->
            <el-col :span="8">
              <yjyq></yjyq>
            </el-col>
          </el-row>
        </el-col>
        <!--负面舆情走势-->
        <el-col :span="6">
          <el-row :gutter="12">
        <!--     媒体分布       -->
            <el-col :span="12">
              <mtfb></mtfb>
            </el-col>
          <!--      信息范围分布      -->
            <el-col :span="12">
              <infoFb></infoFb>
            </el-col>
          </el-row>
        </el-col>
        <!--事件库-->
        <el-col :span="9">
          <el-row :gutter="12">
            <el-col :span="24">
              <shijianku></shijianku>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import leibie from '../../components/yuqing/leibie.vue';
import jcs from '../../components/yuqing/jcs.vue';
import yqxqfb from '../../components/yuqing/fmyqzs.vue';
import zdqyzt from '../../components/yuqing/zdqyzt.vue';
import xqfb from '../../components/yuqing/xqfb.vue';
import yjyq from '../../components/yuqing/yjyq.vue';
import mtfb from '../../components/yuqing/meitifenbu.vue';
import infoFb from '../../components/yuqing/infoFb';
import shijianku from '../../components/yuqing/shijianku';

import {common,subjectTree,yqInfo} from "@/assets/api/yuqing"

// import yqLIst from '@/utils/1'
// import yqsubjectTree from '@/utils/2'
  export default{
    components: {
      leibie,
      jcs,
      yqxqfb,
      zdqyzt,
      xqfb,
      yjyq,
      mtfb,
      infoFb,
      shijianku
    },
    data() {
      return {
        datas:[]
      }
    },
    mounted() {
      // this.common();
      // this.subjectTree()
      // console.log(yqsubjectTree);
      // this.yqInfo()
    },
    methods:{
      toHome() {
        this.$router.replace("/home");
      },
      common(){
        console.log(this.getPorSevenData())
        common({method:'ECharts_pie_Test!list.do',btime:this.getPorSevenData(),etime:this.getDate()}).then(res => {
          console.log(res)
        })
      },
      subjectTree(){
        subjectTree().then(res => {
          console.log(res)
        })
      },
      yqInfo(){
        console.log({btime:this.getPorSevenData(),etime:this.getDate()});
        yqInfo({btime:this.getPorSevenData(),etime:this.getDate(),state:"jing",pageSize:'500',pageNo:"9"}).then(res => {
          this.datas = this.datas.concat(res.data.dataList)
          // if(this.datas.length<res.data.totalrows){
            // this.yqInfo()
          // }else{
            console.log(this.datas)
          // }
        })
      },
      getPorSevenData(){
        const date = new Date();
        let Y = date.getFullYear();
        let M = date.getMonth()+1;
        let D = date.getDate()-7;
        M = M<10?"0"+M:M
        D = D<10?"0"+D:D
        return Y+''+M+''+D+"000000"
      },
      // 当前时间
      getDate(date){
        const dates = date?new Date(date):new Date();
        let Y = dates.getFullYear();
        let M = dates.getMonth()+1;
        let D = dates.getDate();
        M = M<10?"0"+M:M
        D = D<10?"0"+D:D
        return Y+''+M+''+D+"000000"
      }
    }

  }
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
