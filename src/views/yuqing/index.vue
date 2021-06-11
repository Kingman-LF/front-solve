<template>
    <div class="content">
<<<<<<< HEAD
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
          <el-row :gutter="24">
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
    methods:{
      toHome() {
        this.$router.replace("/home");
      },
=======
        <div class="ding" @click="toHome"></div>
        <img :src="require('@/assets/images/4558c9caa1c6045dd9c70de66803f44.jpg')" alt="">
    </div>
</template>
<script>
export default {
    methods: {
         toHome(){
      console.log(123)
      this.$router.replace("/home")
    }
    },
}
</script>
<style lang="scss" scoped>
    .content{
        .ding{
            width: 60rem;
            height: 7rem;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            margin: auto;
            cursor: pointer;
        }
        img{
            width: 320rem;
            height: 90rem;
        }
>>>>>>> 1e79d292c4e2a8e9058c8980f9f3237cd959588f
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