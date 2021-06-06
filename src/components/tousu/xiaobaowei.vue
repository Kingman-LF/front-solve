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
        let gailanTotal = 4521;
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
                  left: "39%",
                  top: "45%",
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
              name: "访问来源",
              type: "pie",
              radius: ["30%", "55%"],
              center: ["46%", "50%"],
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
                length: 20,
                length2: 10
              },
              data: [
                { value: 890, name: "日用百货类" },
                { value: 533, name: "研究饮料食品类" },
                { value: 485, name: "家用电子电器类" },
                { value: 355, name: "家用机械类" },
                { value: 302, name: "建材类" },
                { value: 165, name: "医药和医疗用品类" },
                { value: 148, name: "农用生产资料类" },
                { value: 125, name: "其他" }
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
      height: 30rem;
    }
}
</style>