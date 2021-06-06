<template>
    <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>处理超期区县分布</p>
    </div>
    <div id="chulichao"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
export default {
  mounted() {
    let chulichao = document.getElementById("chulichao");
    let chulichaoChart = echarts.init(chulichao);
    this.zhuzhuang(chulichaoChart);
  },
   methods: {
    zhuzhuang(charts, color, xdata, ydata, rotate) {
      let xData = xdata ? xdata : ['王女士', '李先生', '万延秋', '李艳', '王泽']
      let yData = ydata ? ydata : [9, 7, 5, 5, 5, 4]
      let colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
      
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
            rotate: 20,
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
          type: 'value',
          
        },
        grid: {
          top: '15%',
          left: '5%',
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
          },
          

        }]
      }
      option && charts.setOption(option)
      window.addEventListener('resize', function () {
        charts.resize()
      })

    },
  },
  
}
</script>
<style lang="scss" scoped>
.box {
    width: 55rem;
    height: 40rem;
    #chulichao{
      height: 30rem;
    }
}
</style>