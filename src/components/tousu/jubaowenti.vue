<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>举报问题类别</p>
    </div>
    <div id="jubaowentis"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.jubaowentis();
      }, 500);
    });
  },
  methods: {
    jubaowentis() {
      let jubaowentis = document.getElementById("jubaowentis");
      let jubaowentisChart = echarts.init(jubaowentis);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 452;
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
              radius: ["35%", "55%"],
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
                { value: 289, name: "违法登记管理行为" },
                { value: 187, name: "侵害消费者权益行为" },
                { value: 156, name: "其他" },
                { value: 152, name: "广告行为违法" },
                { value: 140, name: "违反食品安全法法规" },
                { value: 110, name: "价格违法行为" },
                { value: 79, name: "违反个体私营登记管理违规" },
                { value: 40, name: "产品质量违法行为" },
                { value: 26, name: "不正当竞争行为" },
                { value: 25, name: "其他市场监管领域违法行为" },
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
      huanzhuang(jubaowentisChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 38.33rem;
  height: 31.67rem;
  #jubaowentis{
    height: 21.67rem;
  }
}
</style>