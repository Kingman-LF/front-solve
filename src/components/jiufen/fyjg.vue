<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>复议机关</p>
    </div>
    <div id="fuyijiguan"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"

export default {
  name: "fyjg",
  mounted() {
    let fuyijiguan = document.getElementById("fuyijiguan");
    let fuyijiguanChart = echarts.init(fuyijiguan);
    this.zhuzhuangtu3(fuyijiguanChart);
  },
  methods:{
    zhuzhuangtu3(charts, color, xdata, ydata, rotate) {
      let xData = xdata ? xdata : ['市局', '南太湖新区分局', '吴兴区局', '南浔区局', '德清县局', '长兴县局', '安吉县局']
      let yData = ydata ? ydata : [3,7,6,19,15,4,5]
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
            rotate: 15,
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
            fontweight: 'bold'
          },
          type: 'value'
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          height: '90%',
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

<style lang="scss" scoped>
#fuyijiguan {
  height: 17.75rem;
}
</style>
