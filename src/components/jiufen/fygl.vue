<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>行政复议概览</p>
    </div>
    <div id="fygailan"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "fygl",
  mounted() {
    var chartDom = document.getElementById('fygailan');
    var myChart = echarts.init(chartDom);
    this.sangshen(myChart, echarts);
  },
  methods:{
    sangshen(charts, echarts) {
      charts.clear()
      var option;
      var legData=['终止(和解)', '维持(驳回)']
      var data = [
          [[28604,77,708888888,'合同格式条款违规','终止(和解)'],[31163,77.4,1088888888,'举报奖励','终止(和解)'],[1516,68,198888888,'特设检查指令书','终止(和解)'],[13670,74.7,988888888,'投诉举报处理','终止(和解)'],[28599,75,388888888,'行政处罚','终止(和解)'],[29476,77.1,288888888,'责令整改','终止(和解)']],
          [[44056,81.8,708888888,'合同格式条款违规','维持(驳回)'],[43294,81.7,1088888888,'举报奖励','维持(驳回)'],[13334,76.9,198888888,'特设检查指令书','维持(驳回)'],[21291,78.5,988888888,'投诉举报处理','维持(驳回)'],[38923,80.8,388888888,'行政处罚','维持(驳回)'],[37599,81.9,288888888,'责令整改','维持(驳回)']]
      ];
      option = {
          backgroundColor: new echarts.graphic.RadialGradient(1, 1, 1, [{
              offset: 1,
              color: 'rgb(255, 255,255,0)'
          }, {
              offset: 1,
              color: 'rgb(255, 255,255,0)'
          }]),
          tooltip: {
              trigger: "axis",
              borderWidth:0,
              textStyle: {
                fontSize:40,
              },
              formatter(e){
                // console.log(e);
                return `${e[0].value[3]}`
              }
            },  
          legend: {
              right: '10%',
              top: '3%',
              textStyle:{
                  fontSize:'2rem',
                  color:'#fff'
              },
              itemHeight:'25',
              data: legData
          },
          grid: {
              left: '8%',
              top: '10%'
          },
          xAxis: {
              splitLine: {
                  lineStyle: {
                      type: 'dashed',
                  }
              },
              // data:data[0],
              axisTick: {
              show: false
            },
            axisLabel: {
              // rotate:20,
              color: "#fff",
              fontSize: '1.5rem',
              fontFamily: "PingFang SC"
            },
          },
          yAxis: {
              splitLine: {
                  lineStyle: {
                      type: 'dashed'
                  },
              },
              axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              fontSize: '1.5rem',
              fontFamily: "PingFang SC"
            },
              scale: true
          },
          series: [{
              name: '终止(和解)',
              data: data[0],
              type: 'scatter',
              symbolSize: function (data) {
                  return Math.sqrt(data[2]) / 5e2;
              },
              emphasis: {
                  focus: 'series',
                  label: {
                      show: true,
                      textStyle: {
                        fontSize:40,
                      },
                      formatter: function (param) {
                          return param.data[3];
                      },
                      position: 'top'
                  }
              },
              itemStyle: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(120, 36, 50, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: 'rgb(251, 118, 123)'
                  }, {
                      offset: 1,
                      color: 'rgb(204, 46, 72)'
                  }])
              }
          }, {
              name: '维持(驳回)',
              data: data[1],
              type: 'scatter',
              symbolSize: function (data) {
                  return Math.sqrt(data[2]) / 5e2;
              },
              emphasis: {
                  focus: 'series',
                  label: {
                      show: true,
                      textStyle: {
                        fontSize:40,
                      },
                      formatter: function (param) {
                          return param.data[3];
                      },
                      position: 'top'
                  }
              },
              itemStyle: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(25, 100, 150, 0.5)',
                  shadowOffsetY: 5,
                  
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: 'rgb(129, 227, 238)'
                  }, {
                      offset: 1,
                      color: 'rgb(25, 183, 207)'
                  }])
              }
          }]
      };
      option && charts.setOption(option);
      window.addEventListener('resize', function () {
        charts.resize()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.myborder{
  height: 52.92rem;
  border-radius: 4px;
}
#fygailan {
  margin-top: 1rem;
  height: 45.9rem;
}
</style>
