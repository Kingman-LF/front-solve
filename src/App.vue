<template>
  <div id="app">
    <div id="echarts" style="width: 520px;height: 460px;background-color: #041128"></div>
    <div id="echarts1" style="width: 1040px;height: 400px;background-color: #041128"></div>
<!--    <router-view :key="$route.fullPath" />-->
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: 'App',
  mounted() {
    var a = [
      {
        name: '市局',
        depth:0,
        itemStyle: {
          color: "#00b7ee"
        }
      }, {
        name: '吴兴分局',
        depth:0,
        itemStyle: {
          color: "#f19149"
        }
      }, {
        name: '长兴分局',
        depth:0,
        itemStyle: {
          color: "#f8b551"
        }
      }, {
        name: '南太湖分局',
        depth:0,
        itemStyle: {
          color: "#b3d465"
        }
      }, {
        name: '德清分局',
        depth:0,
        itemStyle: {
          color: "#13b5b1"
        }
      }, {
        name: '安吉分局',
        depth:0,
        itemStyle: {
          color: "#f19149"
        }
      }, {
        name: '南浔分局',
        depth:0,
        itemStyle: {
          color: "#556fb5"
        }
      }
    ];
    var b = [{
      name: '公司注销',
      depth:1,
      itemStyle: {
        color: "#eb6877"
      }
    }, {
      name: '公司登记',
      depth:1,
      itemStyle: {
        color: "#1ab1dd"
      }
    }];
    var c = [{
      name: '胜诉',
      depth:2,
      itemStyle: {
        color: "#8957a1"
      }
    },{
      name: '败诉',
      depth:2,
      itemStyle: {
        color: "#448aca"
      }
    }];
    var d = [
      {
        name: '领导出庭',
        depth:3,
        itemStyle: {
          color: "#80c269"
        }
      }, {
        name: '非领导出庭',
        depth:3,
        itemStyle: {
          color: "#ea68a2"
        }
      }
    ];
    var e = [
          {
            source: '市局',
            target: '公司注销',
            value: 5
          }, {
            source: '市局',
            target: '公司登记',
            value: 5
          }, {
            source: '吴兴分局',
            target: '公司注销',
            value: 3
          }, {
            source: '吴兴分局',
            target: '公司登记',
            value: 3
          }, {
            source: '长兴分局',
            target: '公司登记',
            value: 8
          }, {
            source: '长兴分局',
            target: '公司注销',
            value: 8
          }, {
            source: '南太湖分局',
            target: '公司登记',
            value: 3
          }, {
            source: '南太湖分局',
            target: '公司注销',
            value: 3
          }, {
            source: '德清分局',
            target: '公司登记',
            value: 1
          }, {
            source: '德清分局',
            target: '公司注销',
            value: 1
          }, {
            source: '安吉分局',
            target: '公司登记',
            value: 2
          },{
            source: '安吉分局',
            target: '公司注销',
            value: 2
          },
          {
            source: '南浔分局',
            target: '公司登记',
            value: 2
          },
          {
            source: '南浔分局',
            target: '公司注销',
            value: 2
          },
        ],
        f = [
          {
            source: '公司登记',
            target: '胜诉',
            value: 2
          },
          {
            source: '公司登记',
            target: '败诉',
            value: 2
          },
          {
            source: '公司注销',
            target: '胜诉',
            value: 2
          },
          {
            source: '公司注销',
            target: '败诉',
            value: 2
          }
        ],
        g = [
          {
            source: '胜诉',
            target: '领导出庭',
            value: 2
          },
          {
            source: '胜诉',
            target: '非领导出庭',
            value: 2
          },
          {
            source: '败诉',
            target: '领导出庭',
            value: 2
          },
          {
            source: '败诉',
            target: '非领导出庭',
            value: 2
          }
        ];

    var option = {
      toolbox:{
        feature:{
          show: true,
          saveAsImage:{
            backgroundColor: "rgba(255, 255, 255, 0)"
          }
        }
      },
      series: {
        type: 'sankey',
        layout: 'none',
        layoutIterations: 0,
        lineStyle:{
          color:"gradient",
          opacity:.5
        },
        emphasis: {
          focus: 'adjacency'
        },
        data: a.concat(b).concat(c).concat(d),
        links: e.concat(f).concat(g),
      }
    };

    echarts.init(document.getElementById('echarts')).setOption(option)


    var option1 = {
      toolbox:{
        feature:{
          show: true,
          saveAsImage:{
            backgroundColor: "rgba(255, 255, 255, 0)"
          }
        }
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLabel:{
          color:"#ffffff",
          fontSize: 18
        }
      },
      yAxis: {
        type: 'value',
        axisLabel:{
          color:"#ffffff",
          fontSize: 18
        }
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290],
        type: 'line',
        smooth: true,
        lineStyle:{
          width:4
        }
      },{
        data: [700, 750, 950, 650, 1136, 1421, 1120],
        type: 'line',
        smooth: true,
        lineStyle:{
          width:4
        }
      }]
    };
    echarts.init(document.getElementById('echarts1')).setOption(option1)
  },
}
</script>

<style>

</style>
