<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>投诉问题类别</p>
    </div>
    <div id="tousuissue"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.tousuissue();
      }, 500);
    });
  },
  methods: {
    tousuissue() {
      let tousuissue = document.getElementById("tousuissue");
      let tousuissueChart = echarts.init(tousuissue);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 7044;
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
              name: "访问来源",
              type: "pie",
              radius: ["40%", "60%"],
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
                length: 20,
                length2: 10
              },
              data: [
                { value: 3134, name: "质量" },
                { value: 2154, name: "其他" },
                { value: 724, name: "售后服务" },
                { value: 465, name: "价格投诉" },
                { value: 200, name: "合同" },
                { value: 84, name: "广告" },
                { value: 55, name: "食品安全" },
                { value: 51, name: "违反《产品质量法》的违法行为" },
                { value: 49, name: "无照经营" },
                { value: 39, name: "计量" },
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
      huanzhuang(tousuissueChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 38.33rem;
  height: 31.67rem;
  #tousuissue{
    height: 25rem;
  }
}
</style>