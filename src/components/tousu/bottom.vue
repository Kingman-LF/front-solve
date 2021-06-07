<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>被投诉对象 TOP10</p>
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>投诉人 TOP10</p>
    </div>
    <div class="list">
      <span
        v-for="(item, index) in topList"
        :key="item.id"
        :class="tabIndex === index ? 'current' : ''"
        @click="clickF(item, index)"
        >{{ item.text }}</span>
    </div>
    <div id="be_complained"></div>
    <div id="complainant"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      tabIndex: 0,
      topList: [
        {
          id: Math.random(),
          text: "湖州市",
        },
        {
          id: Math.random(),
          text: "吴兴区",
        },
        {
          id: Math.random(),
          text: "南浔区",
        },
        {
          id: Math.random(),
          text: "德清县",
        },
        {
          id: Math.random(),
          text: "长兴县",
        },
        {
          id: Math.random(),
          text: "安吉县",
        },
        {
          id: Math.random(),
          text: "南太湖新区",
        },
      ]
    };
  },
  methods: {
    clickF(item, index) {
      this.tabIndex = index;
    },
    zhuzhuangtu2(charts, color, xdata, ydata, rotate) {
      if(charts._dom.id==='be_complained'){
        var xData = xdata ? xdata : ['龙之梦动...', '太湖古镇...', '浙江唯品...', '龙之梦动...', '龙之梦雅...', '龙之梦钻...', '大润发超市', '湖州宝迪...', '德清开元...', '孔雀城二...']
        var yData = ydata ? ydata : [126, 101, 99, 57, 49, 38, 27, 24, 20, 18]
        var colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
      }else{
        var xData = xdata ? xdata : ['王先生', '李先生', '杨女士', '金先生', '朱女士', '褚锡炯', '庄晓清', '慎先生', '陈女士', '史先生']
        var yData = ydata ? ydata : [9, 7, 5, 5, 5, 4, 4, 4, 4, 4]
        var colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
      }
      
      charts.clear()
      let option = {
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.4)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 30,
            fontSize:"1.5rem",
            color: "#fff",
            fontfamily: 'PingFang',
            fontweight: 'bold',
          },
          data: xData
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.4)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontfamily: 'PingFang',
            fontweight: 'bold',
            fontSize:"1.5rem"
          },
          type: 'value',
          
        },
        
        grid: {
          top: '15%',
          left: '5%',
          right: '4%',
          height: '85%',
          containLabel: true,
          
        },
        
        series: [{
          data: yData,
          type: 'bar',
          barWidth: "60%",
          color: colors,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize:"1.5rem"
          },
          

        }]
      }
      option && charts.setOption(option)
      window.addEventListener('resize', function () {
        charts.resize()
      })

    },
  },
  mounted() {
    let complained = document.getElementById("be_complained");
    let complainedChart = echarts.init(complained);
    this.zhuzhuangtu2(complainedChart);
    let complainant = document.getElementById("complainant");
    let complainantChart = echarts.init(complainant);
    this.zhuzhuangtu2(complainantChart);
  },
}
</script>
<style lang="scss" scoped>
.box {
  width: 117rem;
  height: 31.83rem;
  .list{
    width: 70%;
    height: 4rem;
    margin: 0 auto;
    span{
      display: block;
      float: left;
      cursor: pointer;
      width: 14.1%;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
      font-size: 1.5rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #969696;
      opacity: 0.8;
    }
    span:hover{
      color: #fff;
      text-shadow:0rem 0rem .5rem #00f0ff;
    }
    .current{
      color: #fff;
      text-shadow:0rem 0rem .5rem #00f0ff;
    }
  }
  #be_complained{
    width: 55rem;
    height: 19.83rem;
    float: left;
  }
  #complainant{
    width: 55rem;
    height: 19.83rem;
    float: right;
  }
}
</style>