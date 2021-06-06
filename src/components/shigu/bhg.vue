<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>不合规处置事件分析</p>
    </div>
    <div id="bhg"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.bhg();
      }, 500);
    });
  },
  methods: {
    bhg() {
      let bhg = document.getElementById("bhg");
      let bhgChart = echarts.init(bhg);
      function letda(charts) {
        charts.clear();
        let option = {
          title: {
            show: false,
          },
          tooltip:{

          },
          // legend: {
          //   top:'5%',
          //   left: "right",
          //   data: [
          //     "合规",
          //     "不合规",
          //   ],
          //   textStyle: {
          //     color: "#000000",
          //     fontFamily: "PingFang",
          //     fontWeight: "bold",
          //     color: "#FFFFFF",
          //   },
          // },
          radar: {
            // shape: 'circle',
            radius: "75%",
            indicator: [
              { name: "困人事件", max: 60 },
              { name: "误报事件", max: 10 },
              { name: "清洁事件", max: 10 },
              { name: "调试事件", max: 10 },
              { name: "修理", max: 10 },
              { name: "维修/检修", max: 10 },
            ],
            name: {
              fontSize:'1.5rem',
            }

            // label:{
            //   textStyle: {
            //     fontSize:'1.5rem'
            //   }
            // },
          },
          series: [
            {
              name: "事件处置",
              type: "radar",
              data: [
                // {
                //   value: [4200, 3000, 20000, 35000, 50000, 18000],
                //   name: "合规",
                // },
                {
                  value: [57, 8, 8, 4, 0, 0],
                  name: "不合规",
                },
              ],

              itemStyle:{
                colo:"#3fc2ff"
              },
              lineStyle:{
                color:"#3fc2ff"
              },
              areaStyle:{
                color:"#3fc2ff"
              }
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      letda(bhgChart);
    },
  },
};
</script>
<style lang="scss" scoped>
#bhg {
  height: 41.5rem;
}
</style>
