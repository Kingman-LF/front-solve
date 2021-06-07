<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>投诉与举报量走势</p>
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
      color: ['#00DDFF','#80FFA5', ],
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
        left:'right',
        data: ['投诉', '举报'],
        textStyle: {
            color: "rgba(255, 255, 255)",
            fontSize: 20
        },
        itemWidth:50,
        itemHeight:20,
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
              axisLabel:{
                fontSize:"1.5rem"
              },
              boundaryGap: false,
              data: ['1月', '2月', '3月', '4月', '5月'],
              
          }
      ],
      yAxis: [
          {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 1)'
                }
              },
              axisLabel:{
                fontSize:"1.5rem"
              },
          }
      ],
      series: [
            {
              name: '举报',
              type: 'line',
              // stack: '总量',
              smooth: true,
              lineStyle: {
                  width: 3
              },
              showSymbol: false,
              areaStyle: {
                  // opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(0, 221, 255,1)'
                  }, {
                      offset: 1,
                      color: 'rgba(77, 119, 255,0)'
                  }])
              },
              emphasis: {
                  focus: 'series'
              },
              data: [299, 300, 281, 172, 293]
          },
          {
              name: '投诉',
              type: 'line',
              // stack: '总量',
              smooth: true,
              lineStyle: {
                  width: 3
              },
              showSymbol: false,
              areaStyle: {
                  // opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(128, 255, 165,1)'
                  }, {
                      offset: 1,
                      color: 'rgba(1, 191, 236,0)'
                  }])
              },
              emphasis: {
                  focus: 'series'
              },
              data: [1696, 1369, 1549, 1016, 1411]
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
