<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>信访状态</p>
    </div>
    <div class="status">
      <div class="staItem">
        <div class="t">已办结</div>
        <div class="tiao">
          <div class="in" style="width: 60%"></div>
        </div>
        <div class="num">1154(30%)</div>
      </div>
      <div class="staItem">
        <div class="t">办理中</div>
        <div class="tiao">
          <div class="in" style="width: 60%"></div>
        </div>
        <div class="num">1154(30%)</div>
      </div>
      <div class="staItem">
        <div class="t">待办理</div>
        <div class="tiao">
          <div class="in" style="width: 60%"></div>
        </div>
        <div class="num">1154(30%)</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getBarJiaoNang} from "@/utils/getCharts";

export default {
  name: "xfStatus",
  mounted() {

  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.myborder{
  height: 13.33rem;
  .status{
    display: flex;
    align-items: center;
    height: 8rem;
    font-family: PingFang SC;
    font-weight: bold;
    .staItem{
      flex: 1;
      color: #ffffff;
      display: flex;
      align-items: center;
      font-size: 2rem;
      line-height: 2rem;
      .t{

        margin-right: 2.08rem;
      }
      .tiao{
        width: 10.75rem;
        height: 1.33rem;
        background-color: rgba(255,255,255,.2);
        position: relative;
        border-radius: 1rem;
        margin-right: 2.17rem;
        .in{
          width: 0;
          transition: width .5s;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
        }

      }
      &:nth-of-type(1) .in{
        background: #00F0FF;
        border-radius: 1rem;
      }
      &:nth-of-type(2) .in{
        background: #43FF55;
        border-radius: 1rem;
      }
      &:nth-of-type(3) .in{
        background: #FF9600;
        border-radius: 1rem;
      }
    }

  }
}
</style>
