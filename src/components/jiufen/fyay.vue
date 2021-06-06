<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>复议案由类型</p>
    </div>
    <div id="anyoutype"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"

export default {
  name: "fyay",
  mounted() {
    let anyoutype = document.getElementById("anyoutype");
    let anyoutypeChart = echarts.init(anyoutype);
    this.zhuzhuangtu2(anyoutypeChart);
  },
  methods:{
    zhuzhuangtu2(charts, color, xdata, ydata, rotate) {
      let xData = xdata ? xdata : ['投诉举报处理', '撤销公司登记', '合同格式条款违规', '特设检查指令书', '行政处罚', '举报奖励', '责令改正']
      let yData = ydata ? ydata : [51, 1, 1, 1, 3, 1, 1]
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
#anyoutype {
  height: 17.75rem;
}
</style>
