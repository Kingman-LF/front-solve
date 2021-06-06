<template>
  <div class="box">
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
            interval: 0,
            rotate: rotate ? rotate : 0,
            color: "#fff",
            fontfamily: 'PingFang',
            fontweight: 'bold'
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
            fontweight: 'bold'
          },
          type: 'value'
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          width: '90%',
          height: '75%',
          containLabel: true
        },
        series: [{
          data: yData,
          type: 'bar',
          barWidth: 20,
          color: colors,
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
#mudi {
  height: 25rem;
}
</style>
