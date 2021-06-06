<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>特种设备高风险单位分布</p>
    </div>
    <div id="tzsb"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.tzsb();
      }, 500);
    });
  },
  methods: {
    //特种设备高风险单位分布
    tzsb() {
      let tzsb = document.getElementById("tzsb");
      let tzsbChart = echarts.init(tzsb);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 25656;
        let option = {
          title:{
            text:`总计\n${gailanTotal}`,
            textAlign:"center",
            textStyle:{
              color:"#ffffff",
              fontfamily: "PingFang Bold",
              fontSize:"1.8rem"
            },
            left:'49%',
            top:'center'
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            show: false,
          },
          // graphic: mygraphic
          //   ? [
          //       {
          //         type: "text",
          //         left: "center",
          //         top: "center",
          //         z: 10,
          //         style: {
          //           fill: "#fff",
          //           // text: gailanTotal,
          //           textAlign: "center",
          //           text: [`{name|总记}`, "{value|" + gailanTotal + "}"].join(
          //             "\n"
          //           ),
          //           rich: {
          //             value: {
          //               color: "#303133",
          //               fontSize: 14,
          //               lineHeight: 20,
          //               fontWeight: "bold",
          //               fontFamily: "PingFang",
          //             },
          //             name: {
          //               color: "#909399",
          //               lineHeight: 20,
          //               fontSize: 14,
          //             },
          //           },
          //           font: "16px PingFang",
          //         },
          //       },
          //     ]
          //   : [],
          series: [
            {
              name: "特种设备高风险单位分布",
              type: "pie",
              radius: ["50%", "75%"],
              center: ["center", "center"],
              avoidLabelOverlap: false,
              label: {
                show: showLable ? showLable : false,
                color: "#fff",
                fontWeight: "bold",
                fontfamily: "PingFang Bold",
                fontSize:"1.34rem",
                formatter(e){
                  console.log(e)
                  return `${e.name}\n${e.value}个 ${e.percent}%`
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
                length: 10,
                length2: 10,
              },
              data: [
                { value: 1048, name: "吴兴区" },
                { value: 735, name: "南浔区" },
                { value: 580, name: "南太湖新区" },
                { value: 484, name: "德清县" },
                { value: 300, name: "长兴县" },
                { value: 300, name: "安吉县" },
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
      huanzhuang(tzsbChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
#tzsb {
  height: 20rem;
}
.tzsb {
  height: 29.17rem;
  background-size: 100% 100%;
  background-image: url("~@/assets/images/shouye/jx9.png");
}
</style>
