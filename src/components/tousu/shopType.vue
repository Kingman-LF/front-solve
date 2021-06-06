<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>商品类别投诉接收量</p>
    </div>
    <div id="shopType"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.shopType();
      }, 500);
    });
  },
  methods: {
    shopType() {
      let shopType = document.getElementById("shopType");
      let shopTypeChart = echarts.init(shopType);
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
                  return `${e.name}\n${e.value}个 ${e.percent}%`
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
                { value: 890, name: "一般食品" },
                { value: 848, name: "其他商品" },
                { value: 533, name: "家居用品" },
                { value: 485, name: "服装鞋帽" },
                { value: 355, name: "交通工具" },
                { value: 302, name: "家用电器" },
                { value: 277, name: "装修建材" },
                { value: 165, name: "烟、酒和饮料" },
                { value: 148, name: "首饰" },
                { value: 125, name: "通讯产品" },
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
      huanzhuang(shopTypeChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 58rem;
  height: 31.5rem;
  #shopType {
    height: 24rem;
  }
}
</style>