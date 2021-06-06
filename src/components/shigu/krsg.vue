<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>困人事故故障类型</p>
    </div>
    <div id="kunren"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.krsg();
      }, 500);
    });
  },
  methods: {
    krsg() {
      // 困人
      let kunren = document.getElementById("kunren");
      let kunrenChart = echarts.init(kunren);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 658;
        let option = {
          tooltip: {
            trigger: "item",
          },
          // legend: {
          //   show: true,
          //   textStyle:{
          //     color:"#ffffff",
          //     fontSize:'1.5rem'
          //   },
          //   bottom:0
          // },
          graphic: [{
            type: 'text',
            left: '42%',
            top: '42%',
            z: 10,
            style: {
              fill: '#fff',
              textAlign: 'center',
              text: [
                `{name|总记}`,
                '{value|' + gailanTotal + '}',

              ].join('\n'),
              rich: {
                value: {
                  color: '#303133',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  fontFamily: 'PingFang'
                },
                name: {
                  color: '#909399',
                  lineHeight:30,
                  fontSize: '2rem'
                },
              },
              font: '16px PingFang'
            }
          }],
          series: [
            {
              name: "困人事故故障类型",
              type: "pie",
              radius: ["40%", "60%"],
              center: ["46%", "50%"],
              // avoidLabelOverlap: false,
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
                { value: 29, name: "平层困人" },
                { value: 49, name: "紧急呼救" },
                { value: 580, name: "门区外停梯" },
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
      huanzhuang(kunrenChart);
    },
  },
};
</script>
<style lang="scss" scoped>
#kunren {
  height: 31.5rem;
}
</style>
