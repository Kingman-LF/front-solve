<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>案件总体情况结案数分布</p>
    </div>
    <div id="ajzt"></div>
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>案件来源分布</p>
    </div>
    <div id="ajlyfb"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      this.ajzt();
    }, 500);

    var ajlyfbDom = document.getElementById('ajlyfb');
    var ajlyfbChart = echarts.init(ajlyfbDom);
    var option;

    option = {
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                smooth: true,
                smooth: true,
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    option && ajlyfbChart.setOption(option);
  },
  methods: {
    // 生产不合格产品TOP5
    ajzt() {
      let ajzt = document.getElementById("ajzt");
      let ajztChart = echarts.init(ajzt);
      function zhuzhuangDuidie(charts, rotate) {
        charts.clear();
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // Use axis to trigger tooltip
              type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
            },
          },
          legend: {
            top:"5%",
            textStyle: {
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
              fontSize:'1.2rem'
            },
            data: ["吴兴区", "南浔区", "南太湖新区", "德清县", "长兴县", "安吉县"],
          },
          grid: {
            top: "15%",
            left: "3%",
            right: "4%",
            width: "90%",
            height: "80%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            axisLabel: {
              interval: 0,
              rotate: rotate ? rotate : 0,
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            data: ["针织服装", "童装", "针织服装", "童装", "针织服装"],
          },
          yAxis: {
            type: "value",
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
            },
          },
          series: [
            {
              name: "吴兴区",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [320, 302, 301, 334, 390, 330, 320],
            },
            {
              name: "南浔区",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "南太湖新区",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "德清县",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "长兴县",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "安吉县",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangDuidie(ajztChart);
    },
  },
};
</script>
<style lang="scss" scoped>
.box{
  height: 81.58rem;
  #ajzt,#ajlyfb {
    height: 35rem;
  }
}
  
</style>
// mounted() {
//     this.$nextTick(() => {
//       setTimeout(() => {
//         this.ajztqk();
//       });
//     });
//   },
//   methods: {
//     // 案件总体情况结案数分布
//     ajztqk() {
//       let ajzt = document.getElementById("ajzt");
//       let ajztChart = echarts.init(ajzt);
//       function sangshen(charts, echarts) {
//         charts.clear();
//         let city = {
//           '侵害消费者权益': "#c23531",
//           '知识产权': "#2f4554",
//           '食品安全违法': "#61a0a8",
//           '药械化违法': "#d48265",
//           '质量领域违法': "#749f83",
//           '其他': "#749f83",

//           '移交':'#749f83',
//           '未移交':'#749f83'
//         };
//         let population = [
//           { source: "侵害消费者权益", target: "移交", value: 4567 },
//           { source: "知识产权", target: "移交", value: 2060 },
//           { source: "食品安全违法", target: "移交", value: 1234 },
//           { source: "药械化违法", target: "移交", value: 124 },
//           { source: "质量领域违法", target: "移交", value: 3714 },
//           { source: "其他", target: "移交", value: 3234 },

//           { source: "侵害消费者权益", target: "未移交", value: 4567 },
//           { source: "知识产权", target: "未移交", value: 2060 },
//           { source: "食品安全违法", target: "未移交", value: 1234 },
//           { source: "药械化违法", target: "未移交", value: 124 },
//           { source: "质量领域违法", target: "未移交", value: 3714 },
//           { source: "其他", target: "未移交", value: 3234 },
//         ];
//         //定义一个数组
//         let citylist = [];
//         //遍历city
//         for (let key in city) {
//           citylist.push(
//             { name: key, itemStyle: { color: city[key] } } //构造节点对象，包括name和itemStyle
//           );
//         }
//         //定义一个数组
//         let data = [];
//         for (let i = 0; i < population.length; i++) {
//           let color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//             {
//               offset: 0,
//               color: city[population[i].source], //获取起始节点的颜色属性
//             },
//             {
//               offset: 1,
//               color: city[population[i].target], //获取结尾节点的颜色属性
//             },
//           ]);
//           data.push({
//             source: population[i].source,
//             target: population[i].target,
//             value: population[i].value,
//             lineStyle: {
//               //添加样式配置
//               color: color,
//             },
//           });
//         }

//         let option = {
//           series: [
//             {
//               type: "sankey",
//               data: citylist,
//               links: data,
//               focusNodeAdjacency: "allEdges", //鼠标悬停到节点或边上，相邻接的节点和边高亮显示
//               label: {
//                 color: "#fff",
//                 fontSize: 14,
//               },
//               draggable: false,
//               itemStyle: {
//                 // borderWidth: 1,
//                 // borderColor: "#fff",
//               },
//               lineStyle: {
//                 curveness: 0.5,
//                 opacity: 0.5,
//               },
//             },
//           ],
//         };
//         option && charts.setOption(option);
//         window.addEventListener("resize", function () {
//           charts.resize();
//         });
//       }
//       sangshen(ajztChart, echarts);
//     },
//   },
