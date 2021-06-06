<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>生产企业类型不合格数量</p>
    </div>
    <div id="scqy"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      this.scqylx();
    });
  },
  methods: {
    // 生产企业类型不合格率排行
    scqylx() {
      let scqy = document.getElementById("scqy");
      let scqyChart = echarts.init(scqy);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 25656;
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
                  left: "40%",
                  top: "43%",
                  z: 10,
                  style: {
                    fill: "#fff",
                    text: gailanTotal,
                    textAlign: "center",
                    text: [`{name|总记}`, "{value|" + gailanTotal + "}"].join(
                        "\n"
                    ),
                    rich: {
                      value: {
                        color: "#303133",
                        fontSize: '2rem',
                        lineHeight: 30,
                        fontWeight: "bold",
                        fontFamily: "PingFang",
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
              name: "生产企业",
              type: "pie",
              radius: ["50%", "70%"],
              center: ["46%", "50%"],
              avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
                formatter(e){
                  console.log(e)
                  return `${e.name}\n${e.value}个`
                  // return `${e.name}\n${e.value}个 ${e.percent}%`
                }
              },
              itemStyle: {
                color: function (params) {
                  var colorlist = [
                    "#fc8452",
                    "#5470c6",
                    "#91cc75",
                    "#fac858",
                    "#ee6666",
                    "#73c0de",
                    "#3ba272",
                  ];
                  return colorlist[params.dataIndex];
                },
              },
              labelLine: {
                show: true,
                length: 20,
                length2: 20,
              },
              data: [
                { value: 1048, name: "三资" },
                { value: 735, name: "国有" },
                { value: 580, name: "私营" },
                { value: 484, name: "其他" },
                { value: 300, name: "股份" },
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
      huanzhuang(scqyChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
  #scqy {
    height: 30.75rem;
  }
</style>
