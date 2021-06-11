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
    let ss = document.getElementById("fygailan");
    let ssChart = echarts.init(ss);
    this.sangshen(ssChart, echarts);
    // var chartDom = document.getElementById('fygailan');
    // var myChart = echarts.init(chartDom);
    // var option;

    // var data = [
    //     [[28604,77,7096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    //     [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
    // ];

    // option = {
    //     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    //         offset: 0,
    //         color: '#f7f8fa'
    //     }, {
    //         offset: 1,
    //         color: '#cdd0d5'
    //     }]),
    //     legend: {
    //         right: '10%',
    //         top: '3%',
    //         data: ['1990', '2015']
    //     },
    //     grid: {
    //         left: '8%',
    //         top: '10%'
    //     },
    //     xAxis: {
    //         splitLine: {
    //             lineStyle: {
    //                 type: 'dashed'
    //             }
    //         }
    //     },
    //     yAxis: {
    //         splitLine: {
    //             lineStyle: {
    //                 type: 'dashed'
    //             }
    //         },
    //         scale: true
    //     },
    //     series: [{
    //         name: '1990',
    //         data: data[0],
    //         type: 'scatter',
    //         symbolSize: function (data) {
    //             return Math.sqrt(data[2]) / 5e2;
    //         },
    //         emphasis: {
    //             focus: 'series',
    //             label: {
    //                 show: true,
    //                 formatter: function (param) {
    //                     return param.data[3];
    //                 },
    //                 position: 'top'
    //             }
    //         },
    //         itemStyle: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(120, 36, 50, 0.5)',
    //             shadowOffsetY: 5,
    //             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
    //                 offset: 0,
    //                 color: 'rgb(251, 118, 123)'
    //             }, {
    //                 offset: 1,
    //                 color: 'rgb(204, 46, 72)'
    //             }])
    //         }
    //     }, {
    //         name: '2015',
    //         data: data[1],
    //         type: 'scatter',
    //         symbolSize: function (data) {
    //             return Math.sqrt(data[2]) / 5e2;
    //         },
    //         emphasis: {
    //             focus: 'series',
    //             label: {
    //                 show: true,
    //                 formatter: function (param) {
    //                     return param.data[3];
    //                 },
    //                 position: 'top'
    //             }
    //         },
    //         itemStyle: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(25, 100, 150, 0.5)',
    //             shadowOffsetY: 5,
    //             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
    //                 offset: 0,
    //                 color: 'rgb(129, 227, 238)'
    //             }, {
    //                 offset: 1,
    //                 color: 'rgb(25, 183, 207)'
    //             }])
    //         }
    //     }]
    // };

    // option && myChart.setOption(option);
  },
  methods:{
    sangshen(charts, echarts) {
      charts.clear()
      let city = {
        '合同格式条款违规': {color:'#eb6877',depth: 0},
        '举报奖励': {color:'#eb6877',depth: 0},
        '特设检查指令书': {color:'#eb6877',depth: 0},
        '投诉举报处理': {color:'#eb6877',depth: 0},
        '行政处罚': {color:'#eb6877',depth: 0},
        '责令整改': {color:'#eb6877',depth: 0},

        '终止（和解）': {color:'#4a91e2',depth: 1},
        '维持（驳回）': {color:'#4a91e2',depth: 1},
        '确定违法': {color:'#4a91e2',depth: 1},
      }
      let population = [
        { source: "合同格式条款违规", target: "终止（和解）", value: 1 },

        { source: "举报奖励", target: "终止（和解）", value: 1 },

        { source: "特设检查指令书", target: "终止（和解）", value: 1 },

        { source: "投诉举报处理", target: "维持（驳回）", value: 18 },
        { source: "投诉举报处理", target: "确定违法", value: 3 },
        { source: "投诉举报处理", target: "终止（和解）", value: 29 },


        { source: "行政处罚", target: "终止（和解）", value: 2 },
        { source: "行政处罚", target: "维持（驳回）", value: 1 },

        { source: "责令整改", target: "终止（和解）", value: 1 },
      ];
      //定义一个数组
      let citylist = [];
      //遍历city
      for (let key in city) {
        citylist.push(
            { name: key, itemStyle: { color: city[key].color },depth: city[key].depth }   //构造节点对象，包括name和itemStyle
        )
      }
      //定义一个数组
      let data = [];
      for (let i = 0; i < population.length; i++) {
        let color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              // color: city[population[i].source].color  //获取起始节点的颜色属性
              color: "#146cff"  //获取起始节点的颜色属性
            }, {
              offset: 1,
              // color: city[population[i].target].color  //获取结尾节点的颜色属性
              color: "#85fdd7"  //获取起始节点的颜色属性
            }]
        )
        data.push({
              source: population[i].source,
              target: population[i].target,
              value: population[i].value,
              lineStyle: {   //添加样式配置
                color: color
              }
            }
        )
      }
      console.log(citylist)
      let option = {
        series: [
          {
            type: 'sankey',
            data: citylist,
            links: data,
            focusNodeAdjacency: 'allEdges',    //鼠标悬停到节点或边上，相邻接的节点和边高亮显示
            label: {
              color: "#fff",
              fontSize: '1.5rem',
              position: "insideLeft",
              formatter:e=>{
                console.log(e.name.replace(/，/,'\n'))
                return e.name.replace(/，/,'\n')
              }
            },
            // itemStyle: {
            //     borderWidth: 1,
            //     borderColor: '#fff'
            // },
            lineStyle: {
              curveness: 0.5,
              opacity: 0.5
            }
          }
        ]
      }
      option && charts.setOption(option)
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
  height: 43.9rem;
}
</style>
