<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>行政诉讼概览</p>
    </div>
    <div id="ssgailan"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ssgl",
  mounted() {
    let ss = document.getElementById("ssgailan");
    let ssChart = echarts.init(ss);
    this.sangshen(ssChart, echarts);
  },
  methods:{
    sangshen(charts, echarts) {
      charts.clear()
      let city = {
        '特种设备投诉举报': {color:'#eb6877',depth: 0},
        '公司注销': {color:'#eb6877',depth: 0},
        '公司登记': {color:'#eb6877',depth: 0},
        '食品投诉举报': {color:'#eb6877',depth: 0},
        '行政处罚': {color:'#eb6877',depth: 0},

        '二审，驳回起诉，再审中': {color:'#f8b551',depth: 1},
        '一审驳回，二审维持原判': {color:'#f8b551',depth: 1},
        '一审驳回，二审中': {color:'#f8b551',depth: 1},
        '驳回': {color:'#f8b551',depth: 1},
        '撤诉，裁定驳回': {color:'#f8b551',depth: 1},
        '和解': {color:'#f8b551',depth: 1},

        '领导出庭': {color:'#4a91e2',depth: 2},
        '非领导出庭': {color:'#ffa500',depth: 2},


      }
      let population = [
        { source: "特种设备投诉举报", target: "二审，驳回起诉，再审中", value: 1 },

        { source: "公司登记", target: "一审驳回，二审维持原判", value: 4 },
        { source: "公司登记", target: "驳回", value: 1 },
        { source: "公司登记", target: "和解", value: 1 },

        { source: "公司注销", target: "撤诉，裁定驳回", value: 1 },
        { source: "公司注销", target: "和解", value: 1 },

        { source: "食品投诉举报", target: "一审驳回，二审中", value: 1 },

        { source: "行政处罚", target: "和解", value: 2 },

        { source: "二审，驳回起诉，再审中", target: "领导出庭", value: 1 },
        { source: "一审驳回，二审维持原判", target: "领导出庭", value: 4 },
        { source: "一审驳回，二审中", target: "领导出庭", value: 1 },
        { source: "驳回", target: "领导出庭", value: 1 },
        { source: "撤诉，裁定驳回", target: "领导出庭", value: 1 },
        { source: "和解", target: "领导出庭", value: 4 },
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
        tooltip:{

      },
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
#ssgailan {
  height: 45.9rem;
}
</style>
