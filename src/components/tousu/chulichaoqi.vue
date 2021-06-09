<template>
    <div class="myborder">
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
      let xData = xdata ? xdata : ['吴兴区', '南浔区', '德清县', '长兴县', '安吉县','南太湖新区']
      let yData = ydata ? ydata : [0, 0, 0, 0, 0, 0]
      let colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
      
      charts.clear()
      let option = {
        tooltip: {
          trigger: "axis",
          borderWidth:0,
          textStyle: {
            fontSize:26,
          },
          formatter(e){
            return `${e[0].name}：${e[0].value}`
            // console.log(e);
          }
        },  
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
            color: "#fff",
            
            fontSize:"1.5rem",
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
          containLabel: true
        },
        series: [{
          data: yData,
          type: 'bar',
          barWidth: "60%",
          fontSize:"1.5rem",
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
  
}
</script>
<style lang="scss" scoped>
.myborder {
    width: 58rem;
    height: 40rem;
    border-radius: 4px;
    #chulichao{
      margin-top: 1rem;
      height: 33rem;
    }
}
</style>