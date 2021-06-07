<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>省级积案概览</p>
      <div class="tips">1件  化解率100%</div>
    </div>
    <div class="data">
      <div class="t">标题:湖州某房地产公司延迟支付违约金等等等啊实打实大苏打</div>
      <div class="c">内容分类:住房保障与房地产-房地产开发管理</div>
      <div class="area">地区：吴兴</div>
      <div class="date">时间:2021-5-21 16:54:00</div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getBarJiaoNang, getZhexian, huanzhuang, sangshen, zhuzhuangtu} from "@/utils/getCharts";

export default {
  name: "sjian",
  data(){
    return {

    }
  },
  mounted() {
    this.$nextTick(() => {

    });
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  .myborder{
    height: 20rem;
    .tips{
      font-size: 2rem;
      background-image: -webkit-linear-gradient(bottom, #3b5ee2, white, white);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: "PingFang SC";;
    }
    .data{
      display: flex;
      font-size: 2rem;
      font-family: PingFang SC;
      flex-wrap: wrap;
      justify-content: center;
      //font-weight: 400;
      color: #FFFFFF;
      padding: 1.67rem 3rem 1.58rem 3.25rem;
      .t{
        width: 43.5rem;
        height: 1.92rem;
        line-height: 1.92rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 2.75rem;
      }
      .c{
        width: 43.5rem;
        height: 1.92rem;
        line-height: 1.92rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 2.75rem;
      }
      .area{
        width: 12rem;
        height: 1.92rem;
        line-height: 1.92rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5rem;
      }
      .date{
        width: 24.67rem;
        height: 1.92rem;
        line-height: 1.92rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
