<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
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
  methods: {
    sangshen(charts, echarts) {
      charts.clear();
      var legData = ["领导出庭", "领导未出庭"];
      // var data = [
      //     [[28604,77,708888888,'合同格式条款违规','领导出庭'],[31163,77.4,1088888888,'举报奖励','领导出庭'],[1516,68,198888888,'特设检查指令书','领导出庭'],[13670,74.7,988888888,'投诉举报处理','领导出庭'],[28599,75,388888888,'行政处罚','领导出庭'],[29476,77.1,288888888,'责令整改','领导出庭']],
      //     [[44056,81.8,708888888,'合同格式条款违规','领导未出庭'],[43294,81.7,1088888888,'举报奖励','领导未出庭'],[13334,76.9,198888888,'特设检查指令书','领导未出庭'],[21291,78.5,988888888,'投诉举报处理','领导未出庭'],[38923,80.8,388888888,'行政处罚','领导未出庭'],[37599,81.9,288888888,'责令整改','领导未出庭']]
      // ];
      var data = [
        [
          ["不服公司变更登记", "和解", 2],
          ["不服公司变更登记", "驳回", 1],

          ["不服假冒伪劣商品举报处理", "和解", 1],

          ["不服食品投诉举报处理", "驳回", 4],
          ["不服食品投诉举报处理", "和解", 4],

          ["不服特种设备投诉举报处理", "驳回", 1],

          ["不服行政处罚", "一审驳回", 1],
          ["不服行政处罚", "二审维持原判", 1],

          ["不服虚假宣传举报处理", "和解", 1],

          ["撤销公司注册登记", "和解", 1],

          ["工商登记", "驳回", 1],

          ["工商行政管理行政裁决（对不给予不服）", "二审维持原判", 1],

          ["对不给予不服", "驳回", 1],

          ["公司登记", "和解", 1],
          ["公司登记", "驳回", 1],
          ["公司登记", "一审驳回，二审维持原判", 4],

          ["公司注销", "和解", 1],
          ["公司注销", "撤诉，裁定驳回", 1],

          ["食品投诉举报", "一审驳回，二审中", 1],

          ["特种设备投诉举报", "二审，驳回起诉，再审中", 1],

          ["行政处罚", "和解", 2],
        ],
      ];
      let option = {
        backgroundColor: new echarts.graphic.RadialGradient(1, 1, 1, [
          {
            offset: 1,
            color: "rgb(255, 255,255,0)",
          },
          {
            offset: 1,
            color: "rgb(255, 255,255,0)",
          },
        ]),
        tooltip: {
          trigger: "axis",
          borderWidth: 0,
          textStyle: {
            fontSize: 20,
          },
          formatter: function (a) {
            let list = [];
            let listItem = "";
            for (var i = 0; i < a.length; i++) {
              list.push(
                a[i].value[0] + "(" + a[i].value[1] + ")" + ":" + a[i].value[2]
              );
            }
            listItem = list.join("<br>");
            return '<div class="showBox">' + listItem + "</div>";
          },
        },
        legend: {
          right: "10%",

          top: "3%",
          textStyle: {
            fontSize: "2rem",
            color: "#fff",
          },
          itemHeight: "25",
          data: legData,
        },
        grid: {
          left: "40%",
          right: "5%",
          top: "10%",
        },
        xAxis: {
          type: "category",
          data: [
            "不服公司变更登记",
            "不服假冒伪劣商品举报处理",
            "不服食品投诉举报处理",
            "不服特种设备投诉举报处理",
            "不服行政处罚",
            "不服虚假宣传举报处理",
            "撤销公司注册登记",
            "工商登记",
            "工商行政管理行政裁决（对不给予不服）",
            "对不给予不服",
            "公司登记",
            "公司注销",
            "食品投诉举报",
            "特种设备投诉举报",
            "行政处罚",
          ],
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#fff",
            rotate: 30,
            interval: 1,
            fontSize: "1.5rem",
            fontFamily: "PingFang SC",
            formatter(e) {
              if (e.length > 5) {
                return e.slice(0, 5) + "...";
              } else {
                return e;
              }
            },
          },
        },
        yAxis: {
          type: "category",
          data: [
            "和解",
            "驳回",
            "撤诉，裁定驳回",
            "二审，驳回起诉，再审中",
            "二审维持原判",
            "一审驳回",
            "一审驳回，二审维持原判",
            "一审驳回，二审中",
          ],
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#fff",
            fontSize: "1.5rem",
            fontFamily: "PingFang SC",
          },
          scale: true,
        },
        series: [
          {
            name: "领导出庭",
            data: data[0],
            type: "scatter",
            symbolSize: function (data) {
              return Math.sqrt(data[2]) * 20;
            },
            emphasis: {
              focus: "series",
              label: {
                show: true,
                textStyle: {
                  fontSize: 40,
                },
                formatter: function (param) {
                  return param.data[3];
                },
                position: "top",
              },
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(120, 36, 50, 0.5)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(251, 118, 123)",
                },
                {
                  offset: 1,
                  color: "rgb(204, 46, 72)",
                },
              ]),
            },
          },
          {
            name: "领导未出庭",
            data: data[1],
            type: "scatter",
            symbolSize: function (data) {
              return Math.sqrt(data[2]) * 20;
            },
            emphasis: {
              focus: "series",
              label: {
                show: true,
                textStyle: {
                  fontSize: 40,
                },
                formatter: function (param) {
                  return param.data[3];
                },
                position: "top",
              },
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(25, 100, 150, 0.5)",
              shadowOffsetY: 5,

              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(129, 227, 238)",
                },
                {
                  offset: 1,
                  color: "rgb(25, 183, 207)",
                },
              ]),
            },
          },
        ],
      };
      option && charts.setOption(option);
      window.addEventListener("resize", function () {
        charts.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.myborder {
  height: 52.92rem;
}
#ssgailan {
  height: 45.9rem;
}
</style>
