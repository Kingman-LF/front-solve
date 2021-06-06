<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>案件总体情况结案数分布</p>
    </div>
    <div id="ajzt"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.ajztqk();
      });
    });
  },
  methods: {
    // 案件总体情况结案数分布
    ajztqk() {
      let ajzt = document.getElementById("ajzt");
      let ajztChart = echarts.init(ajzt);
      function sangshen(charts, echarts) {
        charts.clear();
        let city = {
          '侵害消费者权益': "#c23531",
          '知识产权': "#2f4554",
          '食品安全违法': "#61a0a8",
          '药械化违法': "#d48265",
          '质量领域违法': "#749f83",
          '其他': "#749f83",

          '移交':'#749f83',
          '未移交':'#749f83'
        };
        let population = [
          { source: "侵害消费者权益", target: "移交", value: 4567 },
          { source: "知识产权", target: "移交", value: 2060 },
          { source: "食品安全违法", target: "移交", value: 1234 },
          { source: "药械化违法", target: "移交", value: 124 },
          { source: "质量领域违法", target: "移交", value: 3714 },
          { source: "其他", target: "移交", value: 3234 },

          { source: "侵害消费者权益", target: "未移交", value: 4567 },
          { source: "知识产权", target: "未移交", value: 2060 },
          { source: "食品安全违法", target: "未移交", value: 1234 },
          { source: "药械化违法", target: "未移交", value: 124 },
          { source: "质量领域违法", target: "未移交", value: 3714 },
          { source: "其他", target: "未移交", value: 3234 },
        ];
        //定义一个数组
        let citylist = [];
        //遍历city
        for (let key in city) {
          citylist.push(
            { name: key, itemStyle: { color: city[key] } } //构造节点对象，包括name和itemStyle
          );
        }
        //定义一个数组
        let data = [];
        for (let i = 0; i < population.length; i++) {
          let color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: city[population[i].source], //获取起始节点的颜色属性
            },
            {
              offset: 1,
              color: city[population[i].target], //获取结尾节点的颜色属性
            },
          ]);
          data.push({
            source: population[i].source,
            target: population[i].target,
            value: population[i].value,
            lineStyle: {
              //添加样式配置
              color: color,
            },
          });
        }

        let option = {
          series: [
            {
              type: "sankey",
              data: citylist,
              links: data,
              focusNodeAdjacency: "allEdges", //鼠标悬停到节点或边上，相邻接的节点和边高亮显示
              label: {
                color: "#fff",
                fontSize: 14,
              },
              draggable: false,
              itemStyle: {
                // borderWidth: 1,
                // borderColor: "#fff",
              },
              lineStyle: {
                curveness: 0.5,
                opacity: 0.5,
              },
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      sangshen(ajztChart, echarts);
    },
  },
};
</script>
<style lang="scss" scoped>
  #ajzt {
    height: 30.75rem;
  }
</style>
