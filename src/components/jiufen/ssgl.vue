<template>
  <div class="box">
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
        // '市本级': {color:'#86ffff',depth:0},
        // '吴兴区': {color:'#cd5c5c',depth: 0},
        // '长兴县': {color:'#ff7644',depth: 0},
        // '安吉县': {color:'#ffa500',depth: 0},
        // '德清县': {color:'#32cd32',depth: 0},
        // '南浔区': {color:'#4a91e2',depth: 0},
        // '南太湖新区': {color:'#ff76ff',depth: 0},

        '特种设备投诉举报': {color:'#eb6877',depth: 0},
        '公司注销': {color:'#8957a1',depth: 0},
        '公司登记': {color:'#87cefa',depth: 0},
        '食品投诉举报': {color:'#448aca',depth: 0},
        '行政处罚': {color:'#ea68a2',depth: 0},

        '一审未审结': {color:'#86ffff',depth: 1},
        '二审，驳回起诉': {color:'#f8b551',depth: 1},
        '撤诉': {color:'#13b5af',depth: 1},
        '一审驳回，二审中': {color:'#556fb5',depth: 1},

        // '领导出庭': {color:'#4a91e2',depth: 2},
        // '非领导出庭': {color:'#ffa500',depth: 2},


      }
      let population = [
        // { source: "市本级", target: "特种设备投诉举报", value: 1 },
        // { source: "市本级", target: "公司注销", value: 1 },
        //
        // { source: "吴兴区", target: "公司登记", value: 1 },
        //
        // { source: "长兴县", target: "公司登记", value: 4 },
        //
        // { source: "德清县", target: "公司登记", value: 1 },
        // { source: "德清县", target: "行政处罚", value: 2 },
        //
        // { source: "南浔区", target: "公司注销", value: 1 },
        //
        // { source: "南太湖新区", target: "食品投诉举报", value: 1 },

        { source: "特种设备投诉举报", target: "二审，驳回起诉", value: 1 },

        { source: "公司注销", target: "一审未审结", value: 2 },

        { source: "公司登记", target: "一审未审结", value: 1 },
        { source: "公司登记", target: "撤诉", value: 1 },
        { source: "公司登记", target: "一审驳回，二审中", value: 4 },

        { source: "食品投诉举报", target: "一审未审结", value: 1 },

        { source: "行政处罚", target: "撤诉", value: 2 },

        // { source: "一审未审结", target: "领导出庭", value: 4 },
        // { source: "二审，驳回起诉", target: "领导出庭", value: 1 },
        // { source: "撤诉", target: "领导出庭", value: 3 },
        // { source: "一审驳回，二审中", target: "领导出庭", value: 4 },
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
        toolbox:{
          feature:{
            saveAsImage:{
              backgroundColor:'rgba(255, 255, 255, 0)'
            }
          }
        },
        series: [
          {
            type: 'sankey',
            data: citylist,
            links: data,
            focusNodeAdjacency: 'allEdges',    //鼠标悬停到节点或边上，相邻接的节点和边高亮显示
            label: {
              color: "#fff",
              fontSize: 14
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
#ssgailan {
  height: 44.5rem;
}
</style>
