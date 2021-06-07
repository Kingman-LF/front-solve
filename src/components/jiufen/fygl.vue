<template>
  <div class="box myborder">
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
}
#fygailan {
  height: 45.9rem;
}
</style>
