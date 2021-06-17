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
      var legData=['终止(和解)']
      // var data = [
      //     [[28604,77,708888888,'合同格式条款违规','终止(和解)'],[31163,77.4,1088888888,'举报奖励','终止(和解)'],[1516,68,198888888,'特设检查指令书','终止(和解)'],[13670,74.7,988888888,'投诉举报处理','终止(和解)'],[28599,75,388888888,'行政处罚','终止(和解)'],[29476,77.1,288888888,'责令整改','终止(和解)']],
      //     [[44056,81.8,708888888,'合同格式条款违规','维持(驳回)'],[43294,81.7,1088888888,'举报奖励','维持(驳回)'],[13334,76.9,198888888,'特设检查指令书','维持(驳回)'],[21291,78.5,988888888,'投诉举报处理','维持(驳回)'],[38923,80.8,388888888,'行政处罚','维持(驳回)'],[37599,81.9,288888888,'责令整改','维持(驳回)']]
      // ];
      var data = [
        ['举报投诉','维持',3],
        ['举报投诉','终止',3],
        ['举报投诉','复议中',3],
        ['举报投诉','撤回申请',2],
        ['举报投诉','未结',1],

        ['对履行行政职能申请回复不服','维持',2],

        ['对行政处罚决定不服','撤回申请',1],

        ['对政府信息公开回复不服','维持',4],

        ['请求确认未依法处理投诉举报行为违法','终止',1],

        ['请求重新办理投诉举报事项','终止',1],

        ['不服行政处罚','终止',1],
      ]
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
                fontSize:20,
              },
            formatter: function (a) {
              let list = [];
              let listItem = "";
              for (var i = 0; i < a.length; i++) {
                list.push(
                    a[i].value[0] +'('+
                    a[i].value[1]+')' +':'+
                    a[i].value[2]
                );
              }
              listItem = list.join("<br>");
              return '<div class="showBox">' + listItem + "</div>";
            },
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
              left: '15%',
              top: '10%'
          },
          xAxis: {
            type:"category",
            data:[
              "举报投诉",
              "对履行行政职能申请回复不服",
              "对行政处罚决定不服",
              "对政府信息公开回复不服",
              "请求确认未依法处理投诉举报行为违法",
              "请求重新办理投诉举报事项",
            ],
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
              color: "#fff",
              rotate:20,
              interval:0,
              fontSize: '1.5rem',
              fontFamily: "PingFang SC",
              formatter(e){
                if(e.length>5){
                  return e.slice(0,5)+"..."
                }else{
                  return e
                }
              }
            },
          },
          yAxis: {
            type:"category",
            data:[
              "维持",
              "终止",
              "未结",
              "撤回申请",
              "复议中",
            ],
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
              data: data,
              type: 'scatter',
              symbolSize: function (data) {
                  return Math.sqrt(data[2]) * 20;
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
