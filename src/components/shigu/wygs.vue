<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>预警设备地区分布</p>
    </div>
    <div id="wy"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.wy();
      }, 500);
    });
  },
  methods: {
    wy() {
      let wy = document.getElementById("wy");
      let wyChart = echarts.init(wy);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 6;
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
              name: "访问来源",
              type: "pie",
              radius: ["45%", "70%"],
              center: ["center", "center"],
              avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
                formatter(e){
                  console.log(e)
                  return `${e.name}${e.value}个`
                },
                

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
                length: 10,
                length2: 5
              },
              data: [
                { value: 3, name: "湖州南太湖新区" },
                { value: 2, name: "安吉县" },
                { value: 1, name: "德清县" },
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
      huanzhuang(wyChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.box{
height: 40rem;
  #wy {
    height: 30rem;
  }
  
}
  
</style>
