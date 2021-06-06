<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>信访目的</p>
    </div>
    <div id="mudi"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "xfmd",
  mounted() {
    let mudiChart = echarts.init(document.getElementById("mudi"));
    this.zhuzhuangtu(mudiChart);
  },
  methods:{
    // 绘制柱状图
    zhuzhuangtu(charts, color, xdata, ydata, rotate) {
      console.log(123)
      let xData = xdata ? xdata : ['揭发控告', '其他', '申诉', '求决', '咨询', '意见建议']
      let yData = ydata ? ydata : [23, 17, 15, 6, 0, 0]
      let colors = color ? color : '#00F0FF'
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
            color: "#fff",
            fontSize: '1.5rem',
            fontFamily: "PingFang SC"
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
            fontSize: '1.5rem',
            fontFamily: "PingFang SC"
          },
          type: 'value'
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom:0,
          containLabel: true
        },
        series: [{
          data: yData,
          type: 'bar',
          // barWidth: 20,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 1,
                color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
              },{
                offset: 0,
                color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
              }], false),
            }
          },
          label: {
            show: true,
            position: 'top',
            color: '#fff'
          }
        }]
      }
      option && charts.setOption(option)
      window.addEventListener('resize', function () {
        charts.resize()
      })

    },
  }
}
</script>
<style scoped>
.myborder{
  height: 31.92rem;
}
#mudi {
  margin-top: 1rem;
  height: 24rem;
}
</style>
