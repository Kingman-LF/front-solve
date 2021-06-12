<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>信息范围分布</p>
    </div>

    <div id="infoFb"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "infoFb",
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.mtfb();
      }, 500);
    });
  },
  methods:{
    mtfb() {
      let infoFb = document.getElementById("infoFb");
      let infoFbChart = echarts.init(infoFb);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 7754;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`
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
                    textAlign: "center",
                    text: ["{value|" + gailanTotal + "}"],
                    rich: {
                      value: {
                        color: "#303133",
                        fontSize: '3rem',
                        lineHeight: 30,
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
              radius: ["40%", "60%"],
              center: ["center", "center"],
              // avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
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
                    "",
                    "#CAD9F0",
                  ];
                  return colorlist[params.dataIndex];
                },
              },
              labelLine: {
                show: true,
                lineStyle:{
                  width:2
                }
              },
              data: [
                { value: 16, name: "网媒" },
                { value: 15, name: "微博" },
                { value: 10, name: "微信" },
                { value: 20, name: "贴吧" },
                { value: 20, name: "论坛" },
                { value: 18, name: "小视频" },
                { value: 16, name: "网络视频" },
                { value: 8, name: "电视视频" },
                { value: 25, name: "App" },
                { value: 0, name: "报刊" },
                { value: 13, name: "其他" },
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
      huanzhuang(infoFbChart, true, true);
    },
  }
}
</script>

<style scoped lang="scss">
.myborder {
  height: 40rem;
  border-radius: 4px;
  #infoFb{
    margin-top: 1rem;
    height: 33.6rem;
  }
}
</style>