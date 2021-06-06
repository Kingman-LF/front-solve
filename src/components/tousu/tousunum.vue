<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>投诉数量与举报数量同比</p>
    </div>
    <div id="tousunmap"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    var tousunmap = document.getElementById('tousunmap');
    var myChart = echarts.init(tousunmap);
    var option;
    option = {
      color: ['#80FFA5', '#00DDFF'],
      title: {
          text: ''
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      legend: {
          data: ['投诉', '举报'],
        textStyle: {
            color: "rgba(255, 255, 255)"
        }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
      },
      xAxis: [
          {
              type: 'category',
              axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 1)'
                }
              },
              boundaryGap: false,
              data: ['1月', '2月', '3月']
          }
      ],
      yAxis: [
          {
              type: 'value',
              min:0,
              max:1000,
              axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 1)'
                }
              },
          }
      ],
      series: [
          {
              name: '投诉',
              type: 'line',
              stack: '总量',
              smooth: true,
              lineStyle: {
                  width: 0
              },
              showSymbol: false,
              areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(128, 255, 165)'
                  }, {
                      offset: 1,
                      color: 'rgba(1, 191, 236)'
                  }])
              },
              emphasis: {
                  focus: 'series'
              },
              data: [140, 232, 101]
          },
          {
              name: '举报',
              type: 'line',
              stack: '总量',
              smooth: true,
              lineStyle: {
                  width: 0
              },
              showSymbol: false,
              areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(0, 221, 255)'
                  }, {
                      offset: 1,
                      color: 'rgba(77, 119, 255)'
                  }])
              },
              emphasis: {
                  focus: 'series'
              },
              data: [420, 582, 311]
          },
          
      ]
  };

  option && myChart.setOption(option);

  },
}
</script>
<style lang="scss" scoped>
.box {
  height: 40rem;
  #tousunmap{
    height: 30rem;
    margin-top: 1rem;
  }
}
</style>