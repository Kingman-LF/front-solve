<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>区县信访量趋势</p>
    </div>
    <div id="qushi"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "xftb",
  mounted() {
    let qushi = document.getElementById("qushi");
    let qushiChart = echarts.init(qushi);
    this.getZhexian(qushiChart);
  },
  methods:{
    // 折线图
    getZhexian(charts) {
      charts.clear()
      let option = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          borderWidth:0,
          textStyle: {
            fontSize:25,
          },
          formatter(e){
            return `${e[0].name}<br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[0].color};display:inline-block"></div>${e[0].seriesName} ${e[0].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[1].color};display:inline-block"></div>${e[1].seriesName} ${e[1].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[2].color};display:inline-block"></div>${e[2].seriesName} ${e[2].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[3].color};display:inline-block"></div>${e[3].seriesName} ${e[3].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[4].color};display:inline-block"></div>${e[4].seriesName} ${e[4].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[5].color};display:inline-block"></div>${e[5].seriesName} ${e[5].value}`
            // console.log(e);
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 25,
          itemHeight: 13,
          left: '3%',
          textStyle: {
            fontSize: '1.5rem',
            fontFamily: "PingFang SC",
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          data: ['吴兴区', '南浔区',, '德清县' , '长兴县','安吉县','南太湖新区',]
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom:0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: "#fff",
            fontSize: '1.5rem',
            fontFamily: "PingFang SC"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.4)'
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            type: 'dashed',
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
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
          axisLine: {
            show: true
          }
        },
        series: [
          {
            name: '吴兴区',
            type: 'line',
            smooth: true,
            color: '#00F0FF',
            data: [4, 3, 2, 7, 9]
          },
          {
            name: '南浔区',
            type: 'line',
            smooth: true,
            color: '#2FA768',
            data: [5, 0, 4, 2, 0]
          },
          {
            name: '南太湖新区',
            type: 'line',
            smooth: true,
            color: '#F74849',
            data: [6, 1, 5, 4, 3]
          },
          {
            name: '安吉县',
            type: 'line',
            smooth: true,
            color: '#EC6941',
            data: [0, 5, 1, 3, 2]
          },
          {
            name: '长兴县',
            type: 'line',
            smooth: true,
            color: '#FFF45C',
            data: [1, 2, 3, 3, 0]
          },
          {
            name: '德清县',
            type: 'line',
            smooth: true,
            color: '#0078FF',
            data: [0, 1, 2, 3, 2]
          },
        ]
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
.myborder{
  height: 31.92rem;
}
#qushi {
  margin-top: 1rem;
  height: 24rem;
}
</style>
