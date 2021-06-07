<template>
    <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>消保委投诉类型统计</p>
    </div>
    <div id="baoxiao"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.baoxiao();
      }, 500);
    });
  },
  methods: {
    baoxiao() {
      let baoxiao = document.getElementById("baoxiao");
      let baoxiaoChart = echarts.init(baoxiao);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 773;
        let option = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            show: false,
          },
          graphic: mygraphic
            ? [
                {
                  type: "text",
                  left: "center",
                  top: "center",
                  z: 10,
                  style: {
                    fill: "#fff",
                    text: gailanTotal,
                    textAlign: "center",
                    text: ["{value|" + gailanTotal + "}"].join(
                      "\n"
                    ),
                    rich: {
                      value: {
                        color: "#303133",
                        fontSize: '2rem',
                        lineHeight: 30,
                        fontWeight: "bold",
                        fontFamily: "digifaw",
                        textShadowColor: "#0096ff",
                        textShadowBlur: "12"
                      },
                      name: {
                        color: "#909399",
                        lineHeight: 30,
                        fontSize: '2rem',
                      },
                    },
                    font: "16px PingFang",
                  },
                },
              ]
            : [],
          series: [
            {
              type: "pie",
              radius: ["30%", "50%"],
              center: ["center", "center"],
              avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem'
              },
              itemStyle: {
                color: function (params) {
                  var colorlist = [
                    "#0F5ED6",
                    "#79FFB5",
                    "#843DFF",
                    "#4304B1",
                    "#688FD8",
                    "#F25334",
                    "#49A732",
                    "#EB3633",
                    "#FCBD01",
                    "#CAD9F0",
                  ];
                  return colorlist[params.dataIndex];
                },
              },
              labelLine: {
                show: true,
                length: 15,
                length2: 5
              },
              data: [
                { value: 175, name: "服装鞋帽类" },
                { value: 172, name: "食品类" },
                { value: 154, name: "日用商品类" },
                { value: 93, name: "家用电子电器类" },
                { value: 79, name: "交通工具类" },
                { value: 51, name: "房屋及建材" },
                { value: 20, name: "烟、酒饮料类" },
                { value: 18, name: "首饰及问题用品" },
                { value: 9, name: "医药及医疗用品类" },
                { value: 2, name: "农用生产资料类" }
              ],
            },
            {},
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(baoxiaoChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
    width: 38.33rem;
    height: 40rem;
    #baoxiao{
      height: 32rem;
    }
}
</style>
