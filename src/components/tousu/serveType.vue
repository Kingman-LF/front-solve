<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>服务类别投诉接收量</p>
    </div>
    <div id="serveType"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.serveType();
      }, 500);
    });
  },
  methods: {
    serveType() {
      let serveType = document.getElementById("serveType");
      let serveTypeChart = echarts.init(serveType);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 2522;
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
                    text: gailanTotal,
                    textAlign: "center",
                    text: ["{value|" + gailanTotal + "}"].join(
                      "\n"
                    ),
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
              radius: ["45%", "70%"],
              center: ["center", "center"],
              // avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
                // formatter(e){
                //   return `${e.name}\n${e.value}个 `
                // }
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
                lineStyle:{
                  width:2
                }
                // length: 20,
                // length2: 10
              },
              data: [
                { value: 1118, name: "餐饮和住宿服务" },
                { value: 349, name: "其他服务" },
                { value: 283, name: "停车服务" },
                { value: 218, name: "美容、美发、洗浴服务" },
                { value: 108, name: "教育培训服务" },
                { value: 90, name: "文化、娱乐、体育服务" },
                { value: 87, name: "旅游服务" },
                { value: 79, name: "行政事业性服务" },
                { value: 66, name: "洗涤染色服务" },
                { value: 48, name: "专业技术服务" },
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
      huanzhuang(serveTypeChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder {
  width: 58rem;
  height: 31.5rem;
  #serveType {
    margin-top: 1rem;
    height: 25rem;
  }
}
</style>
