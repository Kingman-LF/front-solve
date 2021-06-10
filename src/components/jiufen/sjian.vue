<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>省级积案概览</p>
      <div class="tips">1件  化解率100%</div>
    </div>
    <div class="disx" :style="{height:height*lineNum + 'rem'}" id ="disx">
      <div class="ul" :style = {transform:transform} :class="{ul_unanim:num===0}">
        <div class="data"
          v-for="(item,index) in contentArr"
          :key=index
          :style="{height:height+'rem'}"
        >
          <div class="t">标题:{{item.type}}</div>
          <div class="c">内容分类:{{item.cont}}</div>
          <div class="area">地区:{{item.area}}</div>
          <div class="date">时间:{{item.date}}</div>
        </div>
        <div class="data"
          v-for="(item,index) in contentArr"
          :key=index+contentArr.length
          :style="{height:height+'rem'}"
        >
          <div class="t">标题:{{item.type}}</div>
          <div class="c">内容分类:{{item.cont}}</div>
          <div class="area">地址:{{item.area}}</div>
          <div class="date">时间:{{item.date}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import * as echarts from "echarts";
import {getBarJiaoNang, getZhexian, huanzhuang, sangshen, zhuzhuangtu} from "@/utils/getCharts";

export default {
  name: "sjian",
  props: {
    height: {
      default: 15,
      type: Number
    },
    lineNum: {
      default: 1,
      type: Number
    }
  },
  data: function () {
    return {
      contentArr: [
                    {type:'对湖州质量技术监督局的处理态度极其不满',cont:'市场监管_市场秩序_制售假冒伪劣商品',date:'2019-09-26 08:56:33',area:'市本级',},
                  ],
      num: 0
    }
  },
  computed: {
    transform: function () {
      return 'translateY(-' + this.num * this.height + 'rem)'
    }
  },
  created: function () {
    let _this = this
    setInterval(function () {
      if (_this.num !== _this.contentArr.length) {
        _this.num++
      } else {
        _this.num = 0
      }
    }, 2000)
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
    .disx{
      display: inline-block;
        position:relative;
        overflow: hidden;
      .ul{
        transition: 1s linear;
        .data{
          display: flex;
          font-size: 2rem;
          font-family: PingFang SC;
          flex-wrap: wrap;
          justify-content: center;
          justify-content: space-between;
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
      .ul_unanim{
            transition: none
        }
    }

  }
</style>
