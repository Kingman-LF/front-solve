<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>风险单位地区分布</p>
    </div>
    <div id="gzl"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.gzl();
      }, 500);
    });
  },
  methods: {
    gzl() {
      let gzl = document.getElementById("gzl");
      let gzlChart = echarts.init(gzl);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 6;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value}个 ${e.percent}%`
              // console.log(e);
            }
          },
          legend: {
            show: false,
          },
          graphic: mygraphic
            ? [
                {
                  tooltip: {
                    formatter(e){
                      return `总量：${gailanTotal}`
                    }
                  },
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
                        fontSize: '3.27rem',
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
              radius: ["45%", "70%"],
              center: ["center", "center"],
              // avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
                formatter(e){
                  console.log(e)
                  return `${e.name}${e.value}个`
                }
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
                  ];
                  return colorlist[params.dataIndex];
                },
              },
              labelLine: {
                show: true,
                lineStyle:{
                  width:2
                }
                // length: 10,
                // length2: 5
              },
              data: [
                { value: 1, name: "德清县" },
                { value: 2, name: "安吉县" },

                { value: 1, name: "南太湖新区区" },
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
      huanzhuang(gzlChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.box{
  height: 40rem;
  #gzl {
    height: 30rem;
  }
}

</style>
